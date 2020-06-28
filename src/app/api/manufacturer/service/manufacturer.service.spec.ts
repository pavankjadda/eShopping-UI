import {TestBed} from "@angular/core/testing";

import {ManufacturerService} from "./manufacturer.service";

describe("ManufacturerService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ManufacturerService = TestBed.get(ManufacturerService);
    expect(service).toBeTruthy();
  });
});
