import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { UnsubscribeDirective } from './unsubscribe.directive';

describe('UnsubscribeDirective', () => {
  let spectator: SpectatorDirective<UnsubscribeDirective>;
  let instance: UnsubscribeDirective;

  const createDirective = createDirectiveFactory({
    directive: UnsubscribeDirective,
    template: `<div [appUnsubscribe]></div>`,
  });

  beforeEach(() => {
    spectator = createDirective();
    instance = spectator.directive;
  });

  describe('should create directive', () => {
    it('should be defined', () => {
      expect(instance).toBeDefined();
    });
  });

  describe('should unsubscribe', () => {
    it('should be unsubscribe from observable', () => {
      const nextSpy = jest.spyOn(instance.ngUnsubscribe$, 'next');
      const completeSpy = jest.spyOn(instance.ngUnsubscribe$, 'complete');

      instance.ngOnDestroy();

      expect(nextSpy).toHaveBeenCalled();
      expect(completeSpy).toHaveBeenCalled();
    });
  });
});
