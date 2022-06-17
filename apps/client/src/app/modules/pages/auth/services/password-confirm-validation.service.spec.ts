import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { FormControl } from '@angular/forms';

import { PasswordValidator } from './password-confirm-validation.service';

describe('PasswordValidator', () => {
  let service: PasswordValidator;
  let spectator: SpectatorService<PasswordValidator>;

  const createService = createServiceFactory({
    service: PasswordValidator,
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;

  });

  describe('should be created', () => {
    it('should be defined', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('validatePassword', () => {
    it('should return error when passwords not equal', async () => {
      const password = new FormControl('123').value;
      const confirmPassword = new FormControl('1234').value;

      const result = service.validatePassword(password, confirmPassword);

      expect(result).toBeTruthy();
    });

    it('should return null when passwords are equal', async () => {
      const password = new FormControl('123').value;
      const confirmPassword = new FormControl('123').value;

      const result = service.validatePassword(password, confirmPassword);

      expect(result).toBeTruthy();
    });
  });
})
;
