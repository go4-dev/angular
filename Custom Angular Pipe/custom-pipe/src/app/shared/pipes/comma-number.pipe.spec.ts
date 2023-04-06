import { CommaNumberPipe } from './comma-number.pipe';

describe('CommaNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CommaNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
