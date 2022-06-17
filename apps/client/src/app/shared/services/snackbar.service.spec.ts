import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Subscription, take, mergeMap, tap } from 'rxjs';

import { SnackbarService } from '../services';
import { ISnackbar } from '../models';


describe('SnackbarService', () => {
  let service: SnackbarService;
  let spectator: SpectatorService<SnackbarService>;

  let subscription: Subscription;

  const createService = createServiceFactory({
    service: SnackbarService,
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;

    subscription = new Subscription();
  });

  describe('should be created', () => {
    it('should be defined', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('createAlert', () => {
    it('should create a success snackbar', () => {
      service.createSuccessSnackbar('test');
      const sub = service.getSnackbars().subscribe((snackbars: ISnackbar[]) => {
        expect(snackbars.length).toBe(1);
        expect(snackbars[0].type).toBe('success');
        expect(snackbars[0].message).toBe('test');
      });

      subscription.add(sub);
    });

    it('should create a error snackbar', () => {
      service.createErrorSnackbar('test');
      const sub = service.getSnackbars().subscribe((snackbars: ISnackbar[]) => {
        expect(snackbars.length).toBe(1);
        expect(snackbars[0].type).toBe('error');
        expect(snackbars[0].message).toBe('test');
      });

      subscription.add(sub);
    });

    it('should create a warning snackbar', () => {
      service.creteWarningSnackbar('test');
      const sub = service.getSnackbars().subscribe((snackbars: ISnackbar[]) => {
        expect(snackbars.length).toBe(1);
        expect(snackbars[0].type).toBe('warning');
        expect(snackbars[0].message).toBe('test');
      });

      subscription.add(sub);
    });

    it('should create a info snackbar', () => {
      service.creteInfoSnackbar('test');
      const sub = service.getSnackbars().subscribe((snackbars: ISnackbar[]) => {
        expect(snackbars.length).toBe(1);
        expect(snackbars[0].type).toBe('info');
        expect(snackbars[0].message).toBe('test');
      });

      subscription.add(sub);
    });
  });

  describe('removeSnackbar', () => {
    it('should remove an alert', () => {
      service.createSuccessSnackbar('test');
      const sub = service.getSnackbars().pipe(
        take(1),
        mergeMap(() => {
          service.removeSnackbar('1');
          return service.getSnackbars();
        }),
        take(1),
        tap((snackbars: ISnackbar[]) => {
          expect(snackbars.length).toBe(0);
        })
      ).subscribe();

      subscription.add(sub);
    });
  });

  afterEach(() => {
    subscription.unsubscribe();
  });
});

