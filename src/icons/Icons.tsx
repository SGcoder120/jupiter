import { type FC } from 'react';

export type IconType = FC<{ fill?: string }>;
const defaultFill = 'fill-slate-400';
const defaultHeartFill = 'fill-slate-800';

export const HomeIcon: IconType = ({ fill = defaultFill }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    className={fill}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1979 21.655V16.655H17.1979V21.655C17.1979 22.205 17.6479 22.655 18.1979 22.655H21.1979C21.7479 22.655 22.1979 22.205 22.1979 21.655V14.655H23.8979C24.3579 14.655 24.5779 14.085 24.2279 13.785L15.8679 6.255C15.4879 5.915 14.9079 5.915 14.5279 6.255L6.16785 13.785C5.82785 14.085 6.03785 14.655 6.49785 14.655H8.19785V21.655C8.19785 22.205 8.64785 22.655 9.19785 22.655H12.1979C12.7479 22.655 13.1979 22.205 13.1979 21.655Z"
      className={fill}
    />
  </svg>
);

export const LikedIcon: IconType = ({ fill = defaultFill }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    className={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.12 5.44376L10.58 10.9838C10.21 11.3538 10 11.8638 10 12.3938V22.3838C10 23.4838 10.9 24.3838 12 24.3838H21C21.8 24.3838 22.52 23.9038 22.84 23.1738L26.1 15.5638C26.94 13.5838 25.49 11.3838 23.34 11.3838H17.69L18.64 6.80376C18.74 6.30376 18.59 5.79376 18.23 5.43376C17.64 4.85376 16.7 4.85376 16.12 5.44376ZM6 24.3838C7.1 24.3838 8 23.4838 8 22.3838V14.3838C8 13.2838 7.1 12.3838 6 12.3838C4.9 12.3838 4 13.2838 4 14.3838V22.3838C4 23.4838 4.9 24.3838 6 24.3838Z"
      className={fill}
    />
  </svg>
);

export const EventsIcon: IconType = ({ fill = defaultFill }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    className={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 7V8H19V7C19 6.45 18.55 6 18 6H12C11.45 6 11 6.45 11 7V8H9V7C9 6.45 8.55 6 8 6C7.45 6 7 6.45 7 7V23C7 23.55 7.45 24 8 24C8.55 24 9 23.55 9 23V22H11V23C11 23.55 11.45 24 12 24H18C18.55 24 19 23.55 19 23V22H21V23C21 23.55 21.45 24 22 24C22.55 24 23 23.55 23 23V7C23 6.45 22.55 6 22 6C21.45 6 21 6.45 21 7ZM11 20H9V18H11V20ZM11 16H9V14H11V16ZM11 12H9V10H11V12ZM21 20H19V18H21V20ZM21 16H19V14H21V16ZM21 12H19V10H21V12Z"
      className={fill}
    />
  </svg>
);

export const SettingsIcon: IconType = ({ fill = defaultFill }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    className={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.1593 15.98C22.1993 15.66 22.2293 15.34 22.2293 15C22.2293 14.66 22.1993 14.34 22.1593 14.02L24.2693 12.37C24.4593 12.22 24.5093 11.95 24.3893 11.73L22.3893 8.27C22.2693 8.05 21.9993 7.97 21.7793 8.05L19.2893 9.05C18.7693 8.65 18.2093 8.32 17.5993 8.07L17.2193 5.42C17.1893 5.18 16.9793 5 16.7293 5H12.7293C12.4793 5 12.2693 5.18 12.2393 5.42L11.8593 8.07C11.2493 8.32 10.6893 8.66 10.1693 9.05L7.67933 8.05C7.44933 7.96 7.18933 8.05 7.06933 8.27L5.06933 11.73C4.93933 11.95 4.99933 12.22 5.18933 12.37L7.29933 14.02C7.25933 14.34 7.22933 14.67 7.22933 15C7.22933 15.33 7.25933 15.66 7.29933 15.98L5.18933 17.63C4.99933 17.78 4.94933 18.05 5.06933 18.27L7.06933 21.73C7.18933 21.95 7.45933 22.03 7.67933 21.95L10.1693 20.95C10.6893 21.35 11.2493 21.68 11.8593 21.93L12.2393 24.58C12.2693 24.82 12.4793 25 12.7293 25H16.7293C16.9793 25 17.1893 24.82 17.2193 24.58L17.5993 21.93C18.2093 21.68 18.7693 21.34 19.2893 20.95L21.7793 21.95C22.0093 22.04 22.2693 21.95 22.3893 21.73L24.3893 18.27C24.5093 18.05 24.4593 17.78 24.2693 17.63L22.1593 15.98ZM14.7293 18.5C12.7993 18.5 11.2293 16.93 11.2293 15C11.2293 13.07 12.7993 11.5 14.7293 11.5C16.6593 11.5 18.2293 13.07 18.2293 15C18.2293 16.93 16.6593 18.5 14.7293 18.5Z"
      className={fill}
    />
  </svg>
);

export const AboutIcon: IconType = ({ fill = defaultFill }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    className={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 5C9.48 5 5 9.48 5 15C5 20.52 9.48 25 15 25C20.52 25 25 20.52 25 15C25 9.48 20.52 5 15 5ZM16 22H14V20H16V22ZM18.07 14.25L17.17 15.17C16.67 15.68 16.31 16.14 16.13 16.86C16.05 17.18 16 17.54 16 18H14V17.5C14 17.04 14.08 16.6 14.22 16.19C14.42 15.61 14.75 15.09 15.17 14.67L16.41 13.41C16.87 12.97 17.09 12.31 16.96 11.61C16.83 10.89 16.27 10.28 15.57 10.08C14.46 9.77 13.43 10.4 13.1 11.35C12.98 11.72 12.67 12 12.28 12H11.98C11.4 12 11 11.44 11.16 10.88C11.59 9.41 12.84 8.29 14.39 8.05C15.91 7.81 17.36 8.6 18.26 9.85C19.44 11.48 19.09 13.23 18.07 14.25V14.25Z"
      className={fill}
    />
  </svg>
);

export const FeedbackIcon: IconType = ({ fill = defaultFill }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    className={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 7H17.82C17.4 5.84 16.3 5 15 5C13.7 5 12.6 5.84 12.18 7H8C6.9 7 6 7.9 6 9V23C6 24.1 6.9 25 8 25H22C23.1 25 24 24.1 24 23V9C24 7.9 23.1 7 22 7ZM15 7C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9C14.45 9 14 8.55 14 8C14 7.45 14.45 7 15 7ZM16 21H11C10.45 21 10 20.55 10 20C10 19.45 10.45 19 11 19H16C16.55 19 17 19.45 17 20C17 20.55 16.55 21 16 21ZM19 17H11C10.45 17 10 16.55 10 16C10 15.45 10.45 15 11 15H19C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17ZM19 13H11C10.45 13 10 12.55 10 12C10 11.45 10.45 11 11 11H19C19.55 11 20 11.45 20 12C20 12.55 19.55 13 19 13Z"
      className={fill}
    />
  </svg>
);

export const RightChevron = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2925 9.29376C11.9025 9.68376 11.9025 10.3138 12.2925 10.7038L16.1725 14.5838L12.2925 18.4638C11.9025 18.8538 11.9025 19.4838 12.2925 19.8738C12.6825 20.2638 13.3125 20.2638 13.7025 19.8738L18.2925 15.2838C18.6825 14.8938 18.6825 14.2638 18.2925 13.8738L13.7025 9.28376C13.3225 8.90376 12.6825 8.90376 12.2925 9.29376Z"
      fill="#C3CAD9"
    />
  </svg>
);

export const HeartOutline: IconType = ({ fill = defaultHeartFill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="auto"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.1532 7.45794C18.6892 5.77794 15.6465 6.56194 14.0038 8.4846C12.3612 6.56194 9.31851 5.7686 6.85451 7.45794C5.54784 8.35394 4.72651 9.86594 4.67051 11.4619C4.53984 15.0833 7.75051 17.9859 12.6505 22.4379L12.7438 22.5219C13.4532 23.1659 14.5452 23.1659 15.2545 22.5126L15.3572 22.4193C20.2572 17.9766 23.4585 15.0739 23.3372 11.4526C23.2812 9.86594 22.4598 8.35394 21.1532 7.45794ZM14.0972 21.0473L14.0038 21.1406L13.9105 21.0473C9.46784 17.0246 6.53718 14.3646 6.53718 11.6673C6.53718 9.8006 7.93718 8.4006 9.80384 8.4006C11.2412 8.4006 12.6412 9.3246 13.1358 10.6033H14.8812C15.3665 9.3246 16.7665 8.4006 18.2038 8.4006C20.0705 8.4006 21.4705 9.8006 21.4705 11.6673C21.4705 14.3646 18.5398 17.0246 14.0972 21.0473Z"
      className={`transition-colors  ${fill} `}
    />
  </svg>
);
export const HeartIcon: IconType = ({ fill = defaultHeartFill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="auto"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3536 24.1307C15.5936 24.8207 14.4236 24.8207 13.6636 24.1207L13.5536 24.0207C8.30357 19.2707 4.87357 16.1607 5.00357 12.2807C5.06357 10.5807 5.93357 8.95065 7.34357 7.99065C9.98357 6.19065 13.2436 7.03065 15.0036 9.09065C16.7636 7.03065 20.0236 6.18065 22.6636 7.99065C24.0736 8.95065 24.9436 10.5807 25.0036 12.2807C25.1436 16.1607 21.7036 19.2707 16.4536 24.0407L16.3536 24.1307Z"
      className={fill}
    />
  </svg>
);

export const MoreIcon: IconType = ({ fill = defaultFill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="auto"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.40011 12.1333C7.37345 12.1333 6.53345 12.9733 6.53345 14C6.53345 15.0267 7.37345 15.8667 8.40011 15.8667C9.42678 15.8667 10.2668 15.0267 10.2668 14C10.2668 12.9733 9.42678 12.1333 8.40011 12.1333ZM19.6001 12.1333C18.5734 12.1333 17.7334 12.9733 17.7334 14C17.7334 15.0267 18.5734 15.8667 19.6001 15.8667C20.6268 15.8667 21.4668 15.0267 21.4668 14C21.4668 12.9733 20.6268 12.1333 19.6001 12.1333ZM14.0001 12.1333C12.9734 12.1333 12.1334 12.9733 12.1334 14C12.1334 15.0267 12.9734 15.8667 14.0001 15.8667C15.0268 15.8667 15.8668 15.0267 15.8668 14C15.8668 12.9733 15.0268 12.1333 14.0001 12.1333Z"
      className={`transition-colors  ${fill} `}
    />
  </svg>
);
export const SearchIcon: IconType = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z"
      fill="#C3CAD9"
    />
  </svg>
);
export const LeftArrowIcon: IconType = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5825 13.5925H10.4125L15.2925 8.71249C15.6825 8.32249 15.6825 7.68249 15.2925 7.29249C15.1057 7.10523 14.852 7 14.5875 7C14.323 7 14.0693 7.10523 13.8825 7.29249L7.2925 13.8825C6.9025 14.2725 6.9025 14.9025 7.2925 15.2925L13.8825 21.8825C14.2725 22.2725 14.9025 22.2725 15.2925 21.8825C15.6825 21.4925 15.6825 20.8625 15.2925 20.4725L10.4125 15.5925H21.5825C22.1325 15.5925 22.5825 15.1425 22.5825 14.5925C22.5825 14.0425 22.1325 13.5925 21.5825 13.5925Z"
      className={fill ?? 'fill-white'}
    />
  </svg>
);
export const RightArrowIcon: IconType = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15.5925H19.17L14.29 20.4725C13.9 20.8625 13.9 21.5025 14.29 21.8925C14.68 22.2825 15.31 22.2825 15.7 21.8925L22.29 15.3025C22.68 14.9125 22.68 14.2825 22.29 13.8925L15.71 7.29249C15.5232 7.10523 15.2695 7 15.005 7C14.7405 7 14.4868 7.10523 14.3 7.29249C13.91 7.68249 13.91 8.31249 14.3 8.70249L19.17 13.5925H8C7.45 13.5925 7 14.0425 7 14.5925C7 15.1425 7.45 15.5925 8 15.5925Z"
        className={fill ?? 'fill-white'}
      />
    </svg>
  );
};
export const PlusIcon: IconType = ({ fill = defaultFill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="29"
    viewBox="0 0 28 29"
    fill={fill}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.6 15.4333H14.9333V20.1C14.9333 20.6133 14.5133 21.0333 14 21.0333C13.4867 21.0333 13.0667 20.6133 13.0667 20.1V15.4333H8.40001C7.88667 15.4333 7.46667 15.0133 7.46667 14.5C7.46667 13.9867 7.88667 13.5667 8.40001 13.5667H13.0667V8.9C13.0667 8.38667 13.4867 7.96667 14 7.96667C14.5133 7.96667 14.9333 8.38667 14.9333 8.9V13.5667H19.6C20.1133 13.5667 20.5333 13.9867 20.5333 14.5C20.5333 15.0133 20.1133 15.4333 19.6 15.4333Z"
      fill={fill}
    />
  </svg>
);
export const GroupIcon: IconType = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="auto"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 14C20.66 14 21.99 12.66 21.99 11C21.99 9.34 20.66 8 19 8C17.34 8 16 9.34 16 11C16 12.66 17.34 14 19 14ZM11 14C12.66 14 13.99 12.66 13.99 11C13.99 9.34 12.66 8 11 8C9.34 8 8 9.34 8 11C8 12.66 9.34 14 11 14ZM11 16C8.67 16 4 17.17 4 19.5V21C4 21.55 4.45 22 5 22H17C17.55 22 18 21.55 18 21V19.5C18 17.17 13.33 16 11 16ZM19 16C18.71 16 18.38 16.02 18.03 16.05C18.05 16.06 18.06 16.08 18.07 16.09C19.21 16.92 20 18.03 20 19.5V21C20 21.35 19.93 21.69 19.82 22H25C25.55 22 26 21.55 26 21V19.5C26 17.17 21.33 16 19 16Z"
      fill="currentColor"
    />
  </svg>
);
export const ListIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="auto"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 17H10C10.55 17 11 16.55 11 16V14C11 13.45 10.55 13 10 13H8C7.45 13 7 13.45 7 14V16C7 16.55 7.45 17 8 17ZM8 22H10C10.55 22 11 21.55 11 21V19C11 18.45 10.55 18 10 18H8C7.45 18 7 18.45 7 19V21C7 21.55 7.45 22 8 22ZM8 12H10C10.55 12 11 11.55 11 11V9C11 8.45 10.55 8 10 8H8C7.45 8 7 8.45 7 9V11C7 11.55 7.45 12 8 12ZM13 17H23C23.55 17 24 16.55 24 16V14C24 13.45 23.55 13 23 13H13C12.45 13 12 13.45 12 14V16C12 16.55 12.45 17 13 17ZM13 22H23C23.55 22 24 21.55 24 21V19C24 18.45 23.55 18 23 18H13C12.45 18 12 18.45 12 19V21C12 21.55 12.45 22 13 22ZM12 9V11C12 11.55 12.45 12 13 12H23C23.55 12 24 11.55 24 11V9C24 8.45 23.55 8 23 8H13C12.45 8 12 8.45 12 9Z"
      fill="#C3CAD9"
    />
  </svg>
);
export const GridIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="auto"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15H11C11.55 15 12 14.55 12 14V10C12 9.45 11.55 9 11 9H8C7.45 9 7 9.45 7 10V14C7 14.55 7.45 15 8 15ZM8 22H11C11.55 22 12 21.55 12 21V17C12 16.45 11.55 16 11 16H8C7.45 16 7 16.45 7 17V21C7 21.55 7.45 22 8 22ZM14 22H17C17.55 22 18 21.55 18 21V17C18 16.45 17.55 16 17 16H14C13.45 16 13 16.45 13 17V21C13 21.55 13.45 22 14 22ZM20 22H23C23.55 22 24 21.55 24 21V17C24 16.45 23.55 16 23 16H20C19.45 16 19 16.45 19 17V21C19 21.55 19.45 22 20 22ZM14 15H17C17.55 15 18 14.55 18 14V10C18 9.45 17.55 9 17 9H14C13.45 9 13 9.45 13 10V14C13 14.55 13.45 15 14 15ZM19 10V14C19 14.55 19.45 15 20 15H23C23.55 15 24 14.55 24 14V10C24 9.45 23.55 9 23 9H20C19.45 9 19 9.45 19 10Z"
      fill="#C3CAD9"
    />
  </svg>
);
export const CheckIcon: IconType = ({ fill = defaultFill }) => (
  <svg
    width="auto"
    height="auto"
    viewBox="0 0 30 30"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.1725 19.1625L8.7025 15.6925C8.51567 15.5052 8.26202 15.4 7.9975 15.4C7.73298 15.4 7.47933 15.5052 7.2925 15.6925C6.9025 16.0825 6.9025 16.7125 7.2925 17.1025L11.4725 21.2825C11.8625 21.6725 12.4925 21.6725 12.8825 21.2825L23.4625 10.7025C23.8525 10.3125 23.8525 9.68249 23.4625 9.29249C23.2757 9.10523 23.022 9 22.7575 9C22.493 9 22.2393 9.10523 22.0525 9.29249L12.1725 19.1625Z"
      fill={fill}
    />
  </svg>
);
export const ExpandMore = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="auto"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4625 12.2925L14.5825 16.1725L10.7025 12.2925C10.5157 12.1052 10.262 12 9.9975 12C9.73298 12 9.47933 12.1052 9.2925 12.2925C8.9025 12.6825 8.9025 13.3125 9.2925 13.7025L13.8825 18.2925C14.2725 18.6825 14.9025 18.6825 15.2925 18.2925L19.8825 13.7025C20.2725 13.3125 20.2725 12.6825 19.8825 12.2925C19.4925 11.9125 18.8525 11.9025 18.4625 12.2925Z"
      className="fill-slate-500"
    />
  </svg>
);
export const ExpandLess = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="auto"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8825 12.2925L9.2925 16.8825C8.9025 17.2725 8.9025 17.9025 9.2925 18.2925C9.6825 18.6825 10.3125 18.6825 10.7025 18.2925L14.5925 14.4125L18.4725 18.2925C18.8625 18.6825 19.4925 18.6825 19.8825 18.2925C20.2725 17.9025 20.2725 17.2725 19.8825 16.8825L15.2925 12.2925C14.9125 11.9025 14.2725 11.9025 13.8825 12.2925Z"
      className="fill-slate-500"
    />
  </svg>
);
export const AccountIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 15C17.21 15 19 13.21 19 11C19 8.79 17.21 7 15 7C12.79 7 11 8.79 11 11C11 13.21 12.79 15 15 15ZM15 17C12.33 17 7 18.34 7 21V22C7 22.55 7.45 23 8 23H22C22.55 23 23 22.55 23 22V21C23 18.34 17.67 17 15 17Z"
      fill="#C3CAD9"
    />
  </svg>
);

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export const UploadIcon = () => (
  <svg 
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  fill="none"
  viewBox="0 0 30 30"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.35 13.04C21.67 9.59 18.64 7 15 7C12.11 7 9.6 8.64 8.35 11.04C5.34 11.36 3 13.91 3 17C3 20.31 5.69 23 9 23H22C24.76 23 27 20.76 27 18C27 15.36 24.95 13.22 22.35 13.04ZM17 16V20H13V16H10L14.65 11.35C14.85 11.15 15.16 11.15 15.36 11.35L20 16H17Z"
      fill="#C3CAD9"/>
  </svg>
)