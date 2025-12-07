import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MySliderHarness } from './slider.harness';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  describe('When clicking 2 times on plus button of first slider', () => {
    test('Then value is 16', async () => {
      const slider = await loader.getHarness(MySliderHarness);
      await slider.clickPlus();
      await slider.clickPlus();
      expect(await slider.getValue()).toBe(16);
    });
  });

  describe('When clicking 1 time on plus button and two times on minus button of first slider', () => {
    test('Then value is still 10', async () => {
      const slider = await loader.getHarness(MySliderHarness);
      await slider.clickPlus();
      await slider.clickMinus();
      await slider.clickMinus();
      expect(await slider.getValue()).toBe(10);
    });
  });

  describe('When clicking 4 times on plus button of slider 1', () => {
    test('Then slider 2 is enabled', async () => {
      const sliders = await loader.getAllHarnesses(MySliderHarness);
      const slider1 = sliders[0];
      const slider2 = sliders[1];

      await slider1.clickPlus();
      await slider1.clickPlus();
      await slider1.clickPlus();
      await slider1.clickPlus();
      expect(await slider2.disabled()).toBe(false);
    });
  });
});
