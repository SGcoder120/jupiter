import type { SelectContact as Contacts } from '@src/server/db/models';
import {type ReactNode} from 'react';

type logoProps = {
  [Property in Contacts["platform"]]: ReactNode;
}

export const logo: logoProps = {
    discord: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="auto" 
        height="auto" 
        viewBox="0 0 30 30" 
        fill="none"
      >
        <path 
          className="fill-slate-300 group-hover:fill-white transition-colors" 
          d="M24.975 6.46173C22.5867 4.53985 18.8085 4.21407 18.6468 4.20235C18.396 4.18126 18.157 4.32188 18.0539 4.55392C18.0445 4.56798 17.9625 4.75782 17.871 5.05313C19.4507 5.32032 21.3914 5.85704 23.1468 6.94688C23.4281 7.12032 23.5148 7.49063 23.3414 7.77188C23.2265 7.95704 23.032 8.05782 22.8304 8.05782C22.7226 8.05782 22.6125 8.02735 22.514 7.96642C19.4953 6.09376 15.7265 6.00001 15 6.00001C14.2734 6.00001 10.5023 6.09376 7.48589 7.96642C7.20464 8.1422 6.83433 8.05548 6.66089 7.77423C6.48511 7.49063 6.57183 7.12267 6.85308 6.94688C8.60855 5.85938 10.5492 5.32032 12.1289 5.05548C12.0375 4.75782 11.9554 4.57032 11.9484 4.55392C11.8429 4.32188 11.6062 4.17657 11.3531 4.20235C11.1914 4.21407 7.41323 4.53985 4.99214 6.48751C3.72886 7.65704 1.19995 14.4914 1.19995 20.4C1.19995 20.5055 1.22808 20.6063 1.27964 20.6977C3.02339 23.7633 7.78355 24.5649 8.8687 24.6C8.87339 24.6 8.88042 24.6 8.88745 24.6C9.07964 24.6 9.26011 24.5086 9.37261 24.3539L10.4695 22.8445C7.50933 22.0805 5.99761 20.782 5.91089 20.7047C5.66245 20.4867 5.63901 20.107 5.85933 19.8586C6.07729 19.6102 6.45698 19.5867 6.70542 19.8047C6.74058 19.8375 9.52495 22.2 15 22.2C20.4843 22.2 23.2687 19.8281 23.2968 19.8047C23.5453 19.5891 23.9226 19.6102 24.1429 19.8609C24.3609 20.1094 24.3375 20.4867 24.089 20.7047C24.0023 20.782 22.4906 22.0805 19.5304 22.8445L20.6273 24.3539C20.7398 24.5086 20.9203 24.6 21.1125 24.6C21.1195 24.6 21.1265 24.6 21.1312 24.6C22.2164 24.5649 26.9765 23.7633 28.7203 20.6977C28.7718 20.6063 28.8 20.5055 28.8 20.4C28.8 14.4914 26.271 7.65704 24.975 6.46173ZM11.1 18C9.9398 18 8.99995 16.9266 8.99995 15.6C8.99995 14.2734 9.9398 13.2 11.1 13.2C12.2601 13.2 13.2 14.2734 13.2 15.6C13.2 16.9266 12.2601 18 11.1 18ZM18.9 18C17.7398 18 16.8 16.9266 16.8 15.6C16.8 14.2734 17.7398 13.2 18.9 13.2C20.0601 13.2 21 14.2734 21 15.6C21 16.9266 20.0601 18 18.9 18Z" 
          fill="#C3CAD9"
        />
      </svg>
    ),
    
    youtube: (
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
          className="fill-slate-300 group-hover:fill-white transition-colors" 
          d="M15.9431 21.9817L11.8399 21.9057C10.5113 21.8793 9.17949 21.9321 7.87701 21.6579C5.89563 21.2483 5.75526 19.2399 5.60838 17.5553C5.40599 15.1868 5.48434 12.7754 5.86627 10.4268C6.08188 9.10893 6.9304 8.32257 8.2426 8.237C12.6723 7.92645 17.1314 7.96325 21.5512 8.10813C22.018 8.12141 22.488 8.19401 22.9482 8.27664C25.2203 8.67966 25.2757 10.9556 25.423 12.8715C25.5698 14.8072 25.5078 16.7529 25.2271 18.6754C25.0019 20.2672 24.5709 21.6021 22.7524 21.7309C20.4738 21.8994 18.2476 22.0351 15.9626 21.9919C15.9627 21.9817 15.9496 21.9817 15.9431 21.9817ZM13.5 18C15.1806 16.9921 16.8291 16.0011 18.5 15C16.8163 13.9921 15.1709 13.0011 13.5 12V18Z" 
          fill="#C3CAD9"
        />
      </svg>
    ),
    
    twitch: '/nebula-logo.png',
    
    facebook: (
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
          className="fill-slate-300 group-hover:fill-white transition-colors" 
          d="M16.8416 24V15.7891H19.4981L19.8929 12.591H16.8416V10.5469C16.8416 9.62225 17.0892 8.98957 18.3673 8.98957H20V6.12514C19.719 6.08343 18.7487 6 17.6245 6C15.2691 6 13.6632 7.49479 13.6632 10.2341V12.5979H11V15.7961H13.6632V24H16.8416Z" 
          fill="#C3CAD9"
        />
      </svg>
    ),
    
    twitter: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="auto" 
        height="auto" 
        viewBox="0 0 30 30" 
        fill="none"
      >
        <path 
          className="fill-slate-300 group-hover:fill-white transition-colors" 
          d="M4.6519 3.59998L13.182 16.0359L4.23706 26.4H6.1437L14.0269 17.2664L20.2917 26.4H26.3L17.3738 13.3875L25.8218 3.59998H23.9164L16.53 12.157L10.6601 3.59998H4.6519Z" 
          fill="#C3CAD9"
        />
      </svg>
    ),
    
    instagram: (
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
          className="fill-slate-300 group-hover:fill-white transition-colors" 
          d="M24.4745 8.44668C24.2195 7.7898 23.8794 7.23338 23.323 6.67697C22.7666 6.12056 22.2102 5.78053 21.5533 5.5255C20.9196 5.27821 20.1855 5.10819 19.1267 5.06182L19.1088 5.06104C18.0564 5.01528 17.7049 5 15 5C12.2798 5 11.9397 5.00773 10.8733 5.06182C9.8068 5.10819 9.08037 5.27821 8.44668 5.5255C7.7898 5.78053 7.23338 6.12056 6.67697 6.67697C6.12056 7.23338 5.78053 7.7898 5.5255 8.44668C5.27821 9.08037 5.10819 9.81453 5.06182 10.8733L5.06104 10.8912C5.01528 11.9436 5 12.2951 5 15C5 17.7202 5.00773 18.0603 5.06182 19.1267C5.10819 20.1932 5.27821 20.9196 5.5255 21.5533C5.78053 22.2102 6.12056 22.7666 6.67697 23.323C7.23338 23.8794 7.7898 24.2195 8.44668 24.4745C9.08037 24.7218 9.81453 24.8918 10.8733 24.9382L10.8912 24.939C11.9436 24.9847 12.2951 25 15 25C17.7202 25 18.0603 24.9923 19.1267 24.9382C20.1932 24.8918 20.9196 24.7218 21.5533 24.4745C22.2102 24.2195 22.7666 23.8794 23.323 23.323C23.8794 22.7666 24.2195 22.2102 24.4745 21.5533C24.7218 20.9196 24.8918 20.1855 24.9382 19.1267L24.939 19.1088C24.9847 18.0564 25 17.7049 25 15C25 12.2798 24.9923 11.9397 24.9382 10.8733C24.8918 9.8068 24.7218 9.08037 24.4745 8.44668ZM22.4435 18.6935C22.4011 19.5833 22.2528 20.0706 22.1257 20.3884C21.9633 20.8121 21.7585 21.1229 21.4407 21.4407C21.1229 21.7585 20.8192 21.9562 20.3884 22.1257C20.0636 22.2528 19.5833 22.4011 18.6935 22.4435L18.6475 22.4455C17.7164 22.4863 17.4044 22.5 15 22.5C12.5565 22.5 12.2669 22.4929 11.3065 22.4435C10.4167 22.4011 9.92938 22.2528 9.61158 22.1257C9.18785 21.9633 8.87712 21.7585 8.55932 21.4407C8.24153 21.1229 8.04379 20.8192 7.87429 20.3884C7.74718 20.0636 7.59887 19.5833 7.5565 18.6935L7.55482 18.6553C7.51375 17.7179 7.5 17.4041 7.5 15C7.5 12.5636 7.50706 12.2669 7.5565 11.3065C7.59887 10.4167 7.74718 9.92938 7.87429 9.61158C8.03672 9.18785 8.24153 8.87712 8.55932 8.55932C8.87712 8.24153 9.18079 8.04379 9.61158 7.87429C9.93644 7.74718 10.4167 7.59887 11.3065 7.5565L11.3447 7.55482C12.2821 7.51375 12.5959 7.5 15 7.5C17.4364 7.5 17.7331 7.50706 18.6935 7.5565C19.5833 7.59887 20.0706 7.74718 20.3884 7.87429C20.8121 8.03672 21.1229 8.24153 21.4407 8.55932C21.7585 8.87712 21.9562 9.18079 22.1257 9.61158C22.2528 9.93644 22.4011 10.4167 22.4435 11.3065L22.4452 11.3447V11.3447C22.4862 12.2821 22.5 12.5959 22.5 15C22.5 17.4132 22.4861 17.7272 22.4447 18.6662L22.4435 18.6935ZM20 11.25C20.6904 11.25 21.25 10.6904 21.25 10C21.25 9.30964 20.6904 8.75 20 8.75C19.3096 8.75 18.75 9.30964 18.75 10C18.75 10.6904 19.3096 11.25 20 11.25ZM15 10C12.2406 10 10 12.2406 10 15C10 17.7594 12.2406 20 15 20C17.7594 20 20 17.7594 20 15C20 12.2406 17.7594 10 15 10ZM12.5 15C12.5 16.3831 13.6227 17.5 15 17.5C16.3773 17.5 17.5 16.3773 17.5 15C17.5 13.6169 16.3831 12.5 15 12.5C13.6169 12.5 12.5 13.6227 12.5 15Z" 
          fill="#C3CAD9"
        />
      </svg>
    ),
    
    website: (
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
          className="fill-slate-300 group-hover:fill-white transition-colors"
          d="M20 10H17C16.45 10 16 10.45 16 11C16 11.55 16.45 12 17 12H20C21.65 12 23 13.35 23 15C23 16.65 21.65 18 20 18H17C16.45 18 16 18.45 16 19C16 19.55 16.45 20 17 20H20C22.76 20 25 17.76 25 15C25 12.24 22.76 10 20 10ZM11 15C11 15.55 11.45 16 12 16H18C18.55 16 19 15.55 19 15C19 14.45 18.55 14 18 14H12C11.45 14 11 14.45 11 15ZM13 18H10C8.35 18 7 16.65 7 15C7 13.35 8.35 12 10 12H13C13.55 12 14 11.55 14 11C14 10.45 13.55 10 13 10H10C7.24 10 5 12.24 5 15C5 17.76 7.24 20 10 20H13C13.55 20 14 19.55 14 19C14 18.45 13.55 18 13 18Z" 
          fill="#C3CAD9"
        />
      </svg>
    ),
    
    email: (
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
          className="fill-slate-300 group-hover:fill-white transition-colors" 
          d="M16.2157 5.02567C10.1257 4.59567 5.09567 9.62567 5.52567 15.7157C5.88567 21.0057 10.5057 24.9957 15.8057 24.9957H19.4957C20.0457 24.9957 20.4957 24.5457 20.4957 23.9957C20.4957 23.4457 20.0457 22.9957 19.4957 22.9957H15.8257C12.0957 22.9957 8.67567 20.5757 7.74567 16.9657C6.25567 11.1657 11.6557 5.75567 17.4557 7.25567C21.0757 8.17567 23.4957 11.5957 23.4957 15.3257V16.4257C23.4957 17.2157 22.7857 17.9957 21.9957 17.9957C21.2057 17.9957 20.4957 17.2157 20.4957 16.4257V15.1757C20.4957 12.6657 18.7157 10.4057 16.2357 10.0557C12.8357 9.56567 9.96567 12.5057 10.5757 15.9257C10.9157 17.8357 12.4057 19.4157 14.2957 19.8657C16.1357 20.2957 17.8857 19.7057 19.0357 18.5357C19.9257 19.7557 21.7057 20.3957 23.3357 19.7457C24.6757 19.2157 25.4957 17.8457 25.4957 16.4057V15.3157C25.4957 10.0057 21.5057 5.38567 16.2157 5.02567ZM15.4957 17.9957C13.8357 17.9957 12.4957 16.6557 12.4957 14.9957C12.4957 13.3357 13.8357 11.9957 15.4957 11.9957C17.1557 11.9957 18.4957 13.3357 18.4957 14.9957C18.4957 16.6557 17.1557 17.9957 15.4957 17.9957Z" 
          fill="#C3CAD9"
        />
      </svg>
    ),
    
    other: '/Jupiter.png',
  };