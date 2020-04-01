import { PaperIcon } from 'projects/paper-icons/src/public-api';
export function hasPaperIcons(arr): arr is PaperIcon[] {
  return (arr as []).every(obj => {
    if ('name' in obj && 'data' in obj) {
      return true;
    } else {
      return false;
    }
  });
}
