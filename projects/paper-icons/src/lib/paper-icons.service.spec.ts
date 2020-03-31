import { TestBed } from "@angular/core/testing";
import { PaperIconsRegistry } from "./paper-icons.registry.service";

describe("PaperIconsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: PaperIconsRegistry = TestBed.get(PaperIconsRegistry);
    expect(service).toBeTruthy();
  });
});
