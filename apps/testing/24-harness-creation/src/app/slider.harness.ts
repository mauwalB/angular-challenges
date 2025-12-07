import { ComponentHarness } from '@angular/cdk/testing';
import { MatSliderHarness } from '@angular/material/slider/testing';

export class MySliderHarness extends ComponentHarness {
  static hostSelector = 'app-slider';

  protected getMinusButton = this.locatorFor('#minusButton');
  protected getPlusButton = this.locatorFor('#plusButton');
  protected getSliderHarnesses = this.locatorFor(MatSliderHarness);

  async clickPlus(): Promise<void> {
    const button = await this.getPlusButton();
    await button.click();
  }

  async clickMinus(): Promise<void> {
    const button = await this.getMinusButton();
    await button.click();
  }

  async getValue(): Promise<number> {
    const slider = await this.getSliderHarnesses();
    const thumb = await slider.getEndThumb();
    return thumb.getValue();
  }

  async getMinValue(): Promise<number> {
    const slider = await this.getSliderHarnesses();
    return slider.getMinValue();
  }

  async disabled(): Promise<boolean> {
    const slider = await this.getSliderHarnesses();
    return await slider.isDisabled();
  }

  async setValue(value: number): Promise<void> {
    const slider = await this.getSliderHarnesses();
    const thumb = await slider.getEndThumb();
    return thumb.setValue(value);
  }
}
