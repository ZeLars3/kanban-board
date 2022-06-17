import { SnackbarType } from '../enums';

export const SNACKBAR_TYPES_CLASS = {
  [SnackbarType.SUCCESS]: 'snackbar__wrapper snackbar__success',
  [SnackbarType.ERROR]: 'snackbar__wrapper snackbar__error',
  [SnackbarType.INFO]: 'snackbar__wrapper snackbar__info',
  [SnackbarType.WARNING]: 'snackbar__wrapper snackbar__warning'
}
