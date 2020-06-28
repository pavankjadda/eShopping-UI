import {FileExistingValuePipe} from "./file-existing-value.pipe";

describe("FileExistingValuePipe", () => {
  it("create an instance", () => {
    const pipe = new FileExistingValuePipe();
    expect(pipe).toBeTruthy();
  });
});
