import { FC } from 'react';

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

export const HistoryIcon: IconType = ({ fill = defaultFill }) => (
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
      d="M16.5515 6.00349C11.4615 5.86349 7.29153 9.95349 7.29153 15.0035H5.50153C5.05153 15.0035 4.83153 15.5435 5.15153 15.8535L7.94153 18.6535C8.14153 18.8535 8.45153 18.8535 8.65153 18.6535L11.4415 15.8535C11.7515 15.5435 11.5315 15.0035 11.0815 15.0035H9.29153C9.29153 11.1035 12.4715 7.95349 16.3915 8.00349C20.1115 8.05349 23.2415 11.1835 23.2915 14.9035C23.3415 18.8135 20.1915 22.0035 16.2915 22.0035C14.6815 22.0035 13.1915 21.4535 12.0115 20.5235C11.6115 20.2135 11.0515 20.2435 10.6915 20.6035C10.2715 21.0235 10.3015 21.7335 10.7715 22.0935C12.2915 23.2935 14.2015 24.0035 16.2915 24.0035C21.3415 24.0035 25.4315 19.8335 25.2915 14.7435C25.1615 10.0535 21.2415 6.13349 16.5515 6.00349ZM16.0415 11.0035C15.6315 11.0035 15.2915 11.3435 15.2915 11.7535V15.4335C15.2915 15.7835 15.4815 16.1135 15.7815 16.2935L18.9015 18.1435C19.2615 18.3535 19.7215 18.2335 19.9315 17.8835C20.1415 17.5235 20.0215 17.0635 19.6715 16.8535L16.7915 15.1435V11.7435C16.7915 11.3435 16.4515 11.0035 16.0415 11.0035Z"
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

export const HeartIcon: IconType = ({ fill = defaultHeartFill }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-colors  ${fill} `}
  >
    <rect width="40" height="40" rx="20" fill="#A0A0A0" fillOpacity="0.5" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.1532 13.458C24.6892 11.778 21.6465 12.562 20.0038 14.4846C18.3612 12.562 15.3185 11.7686 12.8545 13.458C11.5478 14.354 10.7265 15.866 10.6705 17.462C10.5398 21.0833 13.7505 23.986 18.6505 28.438L18.7438 28.522C19.4532 29.166 20.5452 29.166 21.2545 28.5126L21.3572 28.4193C26.2572 23.9766 29.4585 21.074 29.3372 17.4526C29.2812 15.866 28.4598 14.354 27.1532 13.458V13.458ZM20.0972 27.0473L20.0038 27.1406L19.9105 27.0473C15.4678 23.0246 12.5372 20.3646 12.5372 17.6673C12.5372 15.8006 13.9372 14.4006 15.8038 14.4006C17.2412 14.4006 18.6412 15.3246 19.1358 16.6033H20.8812C21.3665 15.3246 22.7665 14.4006 24.2038 14.4006C26.0705 14.4006 27.4705 15.8006 27.4705 17.6673C27.4705 20.3646 24.5398 23.0246 20.0972 27.0473Z"
      className={`${fill} transition-colors`}
    />
  </svg>
);

export const SearchIcon: IconType = ({ fill = defaultFill }) => (
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
