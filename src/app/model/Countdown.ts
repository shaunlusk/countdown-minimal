import { MS_PER_HOUR } from "../constants";

class Countdown {
  private _startDate: Date;
  private _endDate: Date;
  private _title: string;
  private _totalDuration: number;

  constructor (startDate: Date, endDate: Date, title: string) {
    this._startDate = startDate;
    this._endDate = endDate;
    this._title = title;
    this._totalDuration = this._endDate.getTime() - this._startDate.getTime();
  }

  public get startDate(): Date {
    return this._startDate;
  }
  
  public get endDate(): Date {
    return this._endDate;
  }
  
  public get title(): string {
    return this._title;
  }

  public get totalDuration(): number {
    return this._totalDuration;
  }

  public get currentRemaining(): number {
    return this._endDate.getTime() - new Date().getTime();
  }

  public get currentPassed(): number {
    return new Date().getTime() - this._startDate.getTime();
  }

  public get hoursPassed(): number {
    return Math.round(this.currentPassed / MS_PER_HOUR);
  }

  public get hoursRemaining(): number {
    return new Date().getTime() - this._startDate.getTime();
  }
}

export { Countdown };
