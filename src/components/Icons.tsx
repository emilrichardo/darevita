export type IconsList =
  | "x"
  | "instagram"
  | "facebook"
  | "darevita"
  | "logo"
  | "arrow";

interface IconProps {
  icon: IconsList;
  className?: string;
}

export const Icons = ({ icon, className }: IconProps) => {
  if (icon === "x") {
    return (
      <svg
        viewBox="0 0 28 28"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.03 2C4.35 2 6.68 2 9 2C9.04 2 9.07 2.01 9.1 2.05C10.27 3.75 11.44 5.46 12.61 7.16C13.45 8.38 14.28 9.59 15.12 10.81C15.13 10.83 15.15 10.85 15.17 10.88C15.31 10.72 15.44 10.56 15.58 10.41C17.98 7.62 20.37 4.84 22.77 2.05C22.79 2.03 22.83 2.01 22.85 2.01C23.51 2.01 24.17 2.01 24.83 2.01C24.84 2.01 24.86 2.01 24.88 2.01C24.86 2.04 24.84 2.06 24.82 2.08C22.91 4.3 20.99 6.53 19.08 8.75C18.1 9.89 17.11 11.04 16.12 12.18C16.08 12.22 16.09 12.25 16.12 12.29C17.14 13.78 18.16 15.26 19.18 16.75C20.37 18.47 21.55 20.2 22.74 21.92C23.7 23.31 24.65 24.7 25.61 26.09C25.62 26.11 25.64 26.13 25.65 26.15H18.61C18.61 26.15 18.58 26.1 18.57 26.08C18.41 25.85 18.26 25.63 18.1 25.4C17.15 24.02 16.21 22.64 15.26 21.27C14.25 19.8 13.24 18.34 12.23 16.87C12.21 16.84 12.19 16.81 12.17 16.78C12.15 16.8 12.14 16.81 12.13 16.83C11.09 18.04 10.04 19.25 9 20.47C7.43 22.3 5.85 24.13 4.28 25.95C4.22 26.02 4.17 26.09 4.11 26.16C3.43 26.16 2.75 26.16 2.07 26.16C2.05 26.16 2.04 26.16 2.02 26.15C2.03 26.14 2.05 26.12 2.06 26.11C3.52 24.42 4.97 22.72 6.43 21.03C8.02 19.18 9.61 17.34 11.19 15.49C11.23 15.45 11.23 15.42 11.19 15.37C10.96 15.04 10.73 14.7 10.5 14.37C9.59 13.05 8.68 11.72 7.77 10.4C6.88 9.1 5.99 7.81 5.1 6.51C4.15 5.13 3.2 3.74 2.24 2.36C2.16 2.25 2.08 2.13 2 2.02L2.03 2ZM4.87 3.57C4.87 3.57 4.9 3.61 4.91 3.63C6.56 6 8.22 8.36 9.87 10.73C11.65 13.27 13.42 15.81 15.2 18.35C16.66 20.43 18.12 22.52 19.57 24.6C19.6 24.64 19.62 24.65 19.67 24.65C20.69 24.65 21.71 24.65 22.74 24.65H22.81C22.81 24.65 22.78 24.61 22.77 24.59C21.34 22.54 19.91 20.49 18.47 18.45C16.96 16.29 15.44 14.12 13.93 11.96C11.99 9.18 10.04 6.4 8.1 3.62C8.07 3.58 8.05 3.57 8 3.57C6.98 3.57 5.95 3.57 4.93 3.57C4.91 3.57 4.89 3.57 4.86 3.57H4.87Z" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg
        viewBox="0 0 29 29"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.42001 13.97C7.44001 10.31 10.36 7.43001 14.01 7.46001C17.66 7.49001 20.54 10.41 20.5 14.06C20.46 17.69 17.57 20.55 13.95 20.54C10.3 20.53 7.40002 17.62 7.43002 13.97H7.42001ZM13.99 9.77001C11.61 9.77001 9.74003 11.61 9.73003 13.98C9.73003 16.33 11.57 18.2 13.9 18.22C16.28 18.24 18.18 16.39 18.19 14.04C18.2 11.66 16.35 9.78001 13.99 9.77001Z"
        />
        <path d="M22.28 7.19999C22.28 6.31999 21.64 5.67999 20.76 5.67999H20.75C19.9 5.67999 19.21 6.35999 19.21 7.19999C19.21 8.01999 19.93 8.73999 20.76 8.73999C21.6 8.74999 22.28 8.04999 22.28 7.19999Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8 26.75H8.99002C8.86795 26.7352 8.74451 26.7163 8.62071 26.6973C8.4099 26.6651 8.19789 26.6326 7.99002 26.62C4.29002 26.41 1.47001 23.71 1.36001 20C1.24001 16 1.26001 11.98 1.36001 7.97999C1.44001 4.70999 3.63002 2.23999 6.80002 1.54999C7.26586 1.44723 7.74108 1.38671 8.21283 1.32663C8.42971 1.29901 8.64585 1.27148 8.86001 1.23999H19.06C19.1567 1.25332 19.2533 1.26888 19.35 1.28443C19.5433 1.31555 19.7367 1.34666 19.93 1.35999C23.18 1.54999 25.6 3.54999 26.36 6.71999C26.4873 7.25034 26.5546 7.7957 26.622 8.34191C26.6499 8.56812 26.6778 8.79449 26.71 9.01999V18.84C26.6949 18.9841 26.6754 19.1267 26.6559 19.269C26.6241 19.502 26.5924 19.7341 26.58 19.97C26.39 23.21 24.39 25.64 21.24 26.39C20.7037 26.5174 20.1584 26.5818 19.6102 26.6466C19.3406 26.6785 19.0703 26.7104 18.8 26.75ZM24.3098 12.2943C24.3205 11.0532 24.3313 9.81398 24.29 8.56999C24.19 5.50999 22.47 3.73999 19.41 3.66999C15.78 3.58999 12.14 3.58999 8.51002 3.66999C5.44002 3.73999 3.69002 5.47999 3.62002 8.54999C3.54002 12.16 3.54002 15.77 3.62002 19.38C3.69002 22.53 5.44001 24.26 8.58001 24.32C12.19 24.39 15.8 24.39 19.41 24.32C22.42 24.26 24.17 22.47 24.27 19.47C24.3113 18.2191 24.3005 16.9634 24.2898 15.7063C24.2849 15.1344 24.28 14.5622 24.28 13.99H24.3C24.3 13.4241 24.3049 12.8589 24.3098 12.2943Z"
        />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg
        viewBox="0 0 28 28"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.32 14.43H15.56V27.03H10.52V14.43H8V9.39H10.52V7.01C10.52 3.41 11.99 1 16.23 1H19.76V6.04H17.56C15.91 6.04 15.8 6.35 15.8 7.5V9.4H19.79L19.32 14.44V14.43Z" />
      </svg>
    );
  }

  if (icon === "darevita") {
    return (
      <svg
        className={className}
        viewBox="0 0 33 43"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.6246 15.7364C7.60778 12.8791 7.6165 2.38896 7.61774 0.00068445C8.47024 0.000187942 9.32337 -0.000556801 10.1759 0.000684338C10.1784 2.75039 10.1721 5.4999 10.179 8.24936C11.0134 8.24377 11.8485 8.24886 12.6822 8.24706C12.6829 6.33937 12.6816 4.43119 12.6829 2.523C13.536 2.52251 14.3891 2.52251 15.2422 2.523C15.2441 4.43119 15.2422 6.33937 15.2429 8.24706L17.7493 8.24706C17.7499 5.4981 17.7474 2.74915 17.7505 0.000187809L20.3068 0.000187697C20.3099 3.59724 20.3074 7.1938 20.308 10.7912C19.1053 11.5325 17.9026 12.2731 16.7005 13.0148C16.0262 11.9906 14.9593 11.23 13.7634 10.9414C12.4243 10.6047 10.9486 10.865 9.81003 11.6453C8.52381 12.5061 7.68501 13.9982 7.64889 15.5449C7.64764 15.6102 7.64889 15.6754 7.6246 15.7364Z" />
        <path d="M7.61838 42.9995L7.61695 38.7994C7.61695 38.7994 7.59453 37.6363 7.68801 37.0613C7.92729 35.4121 8.86331 33.8827 10.2131 32.9022C11.4027 32.0242 12.9095 31.587 14.3864 31.6913C15.8627 31.7832 17.2941 32.4191 18.3573 33.4431C19.565 34.59 20.2879 36.2262 20.3065 37.8903C20.3097 39.4178 20.308 41.4714 20.3074 42.9995C16.0779 43.0002 11.8478 43.0002 7.61838 42.9995ZM10.1784 40.4511C12.7016 40.4505 15.2255 40.4511 17.7494 40.4505C17.7494 39.814 17.7498 38.6504 17.7485 38.0133C17.7479 37.6376 17.6956 37.2619 17.5852 36.9023C17.2967 35.9479 16.6106 35.1239 15.7257 34.6626C14.905 34.2267 13.9204 34.1131 13.0212 34.3459C12.1855 34.5576 11.4315 35.0675 10.9198 35.7579C10.445 36.3925 10.1801 37.1805 10.1776 37.9722C10.1776 38.6236 10.1772 39.8003 10.1784 40.4511" />
        <path d="M7.61974 27.4834C7.61787 26.5594 7.61912 25.6348 7.61912 24.7108C11.8486 23.304 16.0775 21.8926 20.3075 20.4882C20.3088 21.4135 20.3082 22.3394 20.3082 23.2653C19.7311 23.4593 19.1522 23.6502 18.5751 23.8436L18.5751 28.3506C19.1522 28.5427 19.7299 28.7348 20.3075 28.927C20.3088 29.8535 20.3082 30.7794 20.3075 31.7053C16.0774 30.301 11.8492 28.889 7.61974 27.4834ZM11.8069 26.097C13.2096 26.5638 14.6118 27.0313 16.0145 27.4981C16.0151 26.5638 16.0151 25.6296 16.0145 24.6953C14.6118 25.1628 13.209 25.6283 11.8069 26.097Z" />
        <path d="M10.151 19.0446C10.1491 17.9325 10.1503 16.8202 10.1503 15.7081C10.1485 15.1362 10.361 14.5676 10.7373 14.1366C11.1343 13.6744 11.7101 13.3704 12.3171 13.3089C12.8935 13.2455 13.4905 13.3987 13.9641 13.7311C14.487 14.0931 14.8602 14.6667 14.9656 15.2933C15.0123 15.5394 14.9998 15.7901 15.0011 16.0392C15.0011 17.0409 15.0017 18.043 15.0005 19.0439C13.384 19.0452 11.7674 19.0447 10.1509 19.0447" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5082 19.0441L20.3075 19.0441L20.3075 13.721L17.5276 15.4407L17.5082 19.0441Z"
        />
        <path d="M22.8708 34.3741C22.8708 34.3496 22.8827 34.3266 22.9028 34.3124C22.9228 34.2982 22.9485 34.2945 22.9718 34.3024C23.4774 34.4757 25.726 35.246 26.0952 35.3725C26.126 35.3831 26.1466 35.4119 26.1466 35.4443L26.1466 36.1913C26.1466 36.2237 26.126 36.2525 26.0952 36.263C25.726 36.3896 23.4774 37.1599 22.9718 37.3332C22.9485 37.3411 22.9228 37.3374 22.9028 37.3232C22.8827 37.309 22.8708 37.2859 22.8708 37.2614L22.8708 36.5725C22.8708 36.5396 22.8922 36.5103 22.9237 36.5003C23.2603 36.3925 25.0908 35.8066 25.0908 35.8066C25.0908 35.8066 23.2604 35.2212 22.9237 35.1135C22.8922 35.1034 22.8708 35.0742 22.8708 35.0413L22.8708 34.3741Z" />
        <path d="M26.0707 25.4808C26.0909 25.4808 26.1102 25.4888 26.1245 25.503C26.1388 25.5172 26.1468 25.5365 26.1468 25.5566L26.1468 27.1633C26.1468 27.1834 26.1388 27.2027 26.1245 27.2169C26.1102 27.2312 26.0909 27.2392 26.0707 27.2392L25.651 27.2392C25.6308 27.2392 25.6114 27.2312 25.5971 27.2169C25.5828 27.2027 25.5748 27.1834 25.5748 27.1633L25.5748 26.7696L23.4425 26.7696L23.4425 27.1633C23.4425 27.1834 23.4345 27.2027 23.4202 27.2169C23.4059 27.2312 23.3866 27.2392 23.3663 27.2392L22.9472 27.2392C22.927 27.2392 22.9076 27.2312 22.8933 27.2169C22.879 27.2027 22.871 27.1834 22.871 27.1633L22.871 25.5566C22.871 25.5365 22.879 25.5172 22.8933 25.503C22.9076 25.4888 22.9269 25.4808 22.9472 25.4808L23.3663 25.4808C23.3865 25.4808 23.4059 25.4888 23.4202 25.503C23.4345 25.5172 23.4425 25.5365 23.4425 25.5566L23.4425 25.9498L25.5748 25.9498L25.5748 25.5566C25.5748 25.5365 25.5828 25.5172 25.5971 25.503C25.6114 25.4888 25.6307 25.4808 25.651 25.4808L26.0707 25.4808Z" />
        <path d="M26.1468 8.88825C26.1468 8.91276 26.135 8.93579 26.1151 8.95C26.0952 8.96415 26.0696 8.96794 26.0463 8.96036C25.5416 8.79039 23.2934 8.03333 22.9229 7.90865C22.8919 7.89829 22.8711 7.86943 22.8711 7.83679L22.8711 7.05143C22.8711 7.01879 22.8919 6.98999 22.9229 6.97957C23.2934 6.85489 25.5416 6.09784 26.0463 5.92811C26.0696 5.92029 26.0952 5.92407 26.1151 5.93822C26.135 5.95262 26.1468 5.97539 26.1468 5.99991L26.1468 6.68212C26.1468 6.71551 26.125 6.74486 26.093 6.75473C25.934 6.80301 25.4782 6.94215 25.4782 6.94215L25.4782 7.9681C25.4782 7.9681 25.934 8.10699 26.093 8.15552C26.125 8.16514 26.1468 8.19474 26.1468 8.22813L26.1468 8.88831L26.1468 8.88825ZM24.8842 7.12169L23.8041 7.45482L24.8842 7.78844L24.8842 7.12169Z" />
        <path d="M22.8683 15.6555C22.8683 15.6352 22.8763 15.616 22.8906 15.6016C22.9048 15.5874 22.9242 15.5796 22.9444 15.5796L23.4204 15.5796C23.4406 15.5796 23.46 15.5874 23.4743 15.6016C23.4886 15.616 23.4966 15.6352 23.4966 15.6555L23.4966 16.4892L26.0702 16.4892C26.0904 16.4892 26.1098 16.4972 26.1241 16.5114C26.1384 16.5256 26.1464 16.5448 26.1464 16.565L26.1464 17.2344C26.1464 17.2543 26.1384 17.2738 26.1241 17.288C26.1098 17.3021 26.0905 17.3103 26.0702 17.3103L23.4966 17.3103L23.4966 18.15C23.4966 18.1918 23.4625 18.2259 23.4204 18.2259L22.9444 18.2259C22.9242 18.2259 22.9049 18.2179 22.8906 18.2036C22.8763 18.1893 22.8683 18.17 22.8683 18.15L22.8683 15.6555Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.34617 8.54438L6.34617 9.52324C2.93193 12.3992 0.761507 16.6992 0.761507 21.5C0.761507 26.3008 2.93193 30.6008 6.34617 33.4768L6.34617 34.4556C2.48513 31.4456 -3.36445e-07 26.7586 -5.66307e-07 21.5C-7.96168e-07 16.2414 2.48513 11.5544 6.34617 8.54438Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.4153 9.17669C30.8397 12.1867 32.9999 16.5955 32.9999 21.5C32.9999 26.4045 30.8397 30.8133 27.4153 33.8232L27.4153 32.7913C30.3879 29.9406 32.2384 25.934 32.2384 21.5C32.2384 17.0659 30.3879 13.0593 27.4153 10.2087L27.4153 9.17669Z"
        />
      </svg>
    );
  }

  if (icon === "logo") {
    return (
      <svg
        className={className}
        viewBox="0 0 62 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.3103 11.0903C43.0027 11.0684 55.5355 11.0763 60.5754 11.0795L61.999 11.0804L61.9993 11.4903C61.9999 12.5938 62.0006 13.6979 61.999 14.8013C60.4131 14.8027 58.8273 14.8021 57.2415 14.8016C54.8628 14.8007 52.4841 14.7998 50.1056 14.8058C50.1105 15.5435 50.1097 16.2816 50.1089 17.0193C50.1084 17.4951 50.1079 17.9716 50.1089 18.4469C51.2877 18.4473 52.4666 18.4472 53.6456 18.4471C55.2176 18.4469 56.7901 18.4468 58.3622 18.4478C58.3629 19.6887 58.3629 20.9296 58.3622 22.1705C56.7112 22.1722 55.0602 22.1718 53.4093 22.1715C52.3093 22.1713 51.2087 22.1711 50.1089 22.1714V25.8171C51.5222 25.8175 52.9355 25.8172 54.3489 25.817H54.3559C56.9038 25.8165 59.4518 25.816 61.9997 25.819V29.5371C58.6658 29.5401 55.3322 29.5396 51.9983 29.5391H51.9796C50.1334 29.5389 48.2871 29.5386 46.4407 29.539L45.3293 27.7197C44.6312 26.5768 43.9332 25.434 43.2345 24.2916C44.7112 23.3109 45.8078 21.7591 46.224 20.0195C46.7094 18.0717 46.3342 15.9252 45.209 14.2691C43.968 12.3983 41.8166 11.1782 39.5864 11.1257L39.5614 11.1252C39.4756 11.1239 39.3904 11.1225 39.3103 11.0903Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.000707694 11.0815L6.05673 11.0794C6.05673 11.0794 7.73367 11.0468 8.56271 11.1827C10.9407 11.5308 13.1459 12.8923 14.5597 14.8555C15.8256 16.5859 16.4559 18.7776 16.3055 20.9259C16.173 23.0733 15.2562 25.1553 13.7798 26.7017C12.1261 28.4583 9.76693 29.5098 7.36743 29.537C5.49587 29.5408 3.07665 29.5396 1.03998 29.5386L0.000707694 29.5381C-0.000276588 23.3862 -0.000276588 17.2333 0.000707694 11.0815ZM3.67512 14.8052C3.67557 16.6402 3.67557 18.4755 3.67557 20.3109C3.67557 22.1463 3.67557 23.9819 3.67602 25.8174L4.26931 25.8175C5.20239 25.8176 6.44565 25.8177 7.19017 25.8162C7.73188 25.8153 8.27351 25.7392 8.79195 25.5787C10.1681 25.159 11.3562 24.1611 12.0214 22.874C12.6499 21.6802 12.8137 20.248 12.478 18.9401C12.1727 17.7245 11.4376 16.6278 10.4421 15.8836C9.52703 15.1929 8.3909 14.8076 7.24932 14.804L6.64603 14.8039C5.69612 14.8038 4.43602 14.8037 3.67512 14.8052Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.2285 11.0821C24.2766 11.0817 23.3245 11.0813 22.3728 11.0833C21.4625 13.8465 20.5503 16.6094 19.6381 19.3723L19.6374 19.3744L19.6343 19.3839C18.5169 22.7683 17.3995 26.1529 16.2854 29.5382C17.6204 29.5391 18.9554 29.5401 20.2913 29.5382L20.2933 29.5324C20.5697 28.6941 20.846 27.8558 21.1224 27.0184H27.6208C27.7468 27.3975 27.872 27.7772 27.9972 28.1569C28.1492 28.6178 28.3013 29.079 28.4547 29.5391L29.456 29.5393C30.4572 29.5394 31.4583 29.5396 32.4589 29.5382C31.22 25.7737 29.9773 22.0099 28.7346 18.246L28.7305 18.2337C27.9435 15.85 27.1565 13.4662 26.3704 11.0824L25.2285 11.0821ZM23.3214 20.3557C23.6716 19.2951 24.0218 18.2345 24.3717 17.1737C24.8001 18.4662 25.2265 19.7591 25.653 21.0522L25.6552 21.0587C25.9009 21.8037 26.1467 22.5488 26.3928 23.2938C25.0457 23.2948 23.6987 23.2948 22.3515 23.2938C22.671 22.3256 22.9906 21.3576 23.3102 20.3896L23.3214 20.3557Z"
          fill="white"
        />
        <path
          d="M37.9764 14.7638L39.3511 14.7641C40.1757 14.7614 40.9956 15.0705 41.617 15.618C42.2834 16.1954 42.7218 17.0329 42.8104 17.9158C42.9019 18.7542 42.6809 19.6226 42.2016 20.3114C41.6797 21.0719 40.8526 21.6149 39.9492 21.7681C39.6611 21.8233 39.3686 21.8217 39.0765 21.8202C39.0088 21.8198 38.9412 21.8194 38.8737 21.8198L37.7884 21.8199C36.7058 21.8201 35.623 21.8202 34.5413 21.8189C34.5399 19.9907 34.54 18.1625 34.5402 16.3343L34.5402 14.765C35.6855 14.763 36.8312 14.7635 37.9764 14.7638Z"
          fill="white"
        />
        <path
          d="M34.541 29.5381V25.4665L39.7366 25.4947L42.2163 29.5381H34.541Z"
          fill="white"
        />
        <path
          d="M12.4373 33.2667C12.4727 33.2667 12.5058 33.284 12.5263 33.3131C12.5468 33.3423 12.5522 33.3796 12.5407 33.4135L10.9978 37.9567C10.9825 38.0015 10.941 38.0314 10.8943 38.0314H9.81724C9.77053 38.0314 9.72892 38.0015 9.7138 37.9567L8.1708 33.4135C8.15935 33.3796 8.16472 33.3423 8.18521 33.3131C8.2057 33.284 8.2389 33.2667 8.27424 33.2667H9.26756C9.31508 33.2667 9.35722 33.2977 9.37172 33.3436L10.3719 36.4958L11.3712 33.3436C11.3857 33.2977 11.4279 33.2667 11.4754 33.2667H12.4373Z"
          fill="white"
        />
        <path
          d="M25.2282 37.9993C25.2487 37.9785 25.2602 37.9504 25.2602 37.921V37.3105C25.2602 37.2811 25.2487 37.2529 25.2282 37.2322C25.2077 37.2114 25.1799 37.1997 25.1509 37.1997H24.584V34.0982H25.1509C25.1799 34.0982 25.2077 34.0865 25.2282 34.0658C25.2487 34.0449 25.2602 34.0168 25.2602 33.9874V33.3777C25.2602 33.3483 25.2487 33.3201 25.2282 33.2994C25.2077 33.2786 25.1799 33.2669 25.1509 33.2669H22.8343C22.8053 33.2669 22.7774 33.2786 22.7569 33.2994C22.7365 33.3202 22.7249 33.3484 22.7249 33.3777V33.9874C22.7249 34.0168 22.7365 34.045 22.7569 34.0658C22.7774 34.0865 22.8053 34.0982 22.8343 34.0982H23.4019V37.1997H22.8343C22.8053 37.1997 22.7774 37.2114 22.7569 37.2322C22.7365 37.253 22.7249 37.2812 22.7249 37.3105V37.921C22.7249 37.9504 22.7365 37.9785 22.7569 37.9993C22.7774 38.02 22.8053 38.0317 22.8343 38.0317H25.1509C25.1799 38.0317 25.2077 38.02 25.2282 37.9993Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.1844 38.0318C49.149 38.0318 49.1158 38.0146 49.0953 37.9856C49.0749 37.9566 49.0695 37.9194 49.0804 37.8856C49.3255 37.1515 50.4171 33.8813 50.5968 33.3424C50.6118 33.2974 50.6534 33.2671 50.7004 33.2671H51.8328C51.8799 33.2671 51.9214 33.2974 51.9364 33.3424L52.4349 34.8359C52.8193 35.988 53.3001 37.4284 53.4525 37.8856C53.4638 37.9194 53.4583 37.9566 53.4379 37.9856C53.4171 38.0146 53.3843 38.0318 53.349 38.0318H52.3653C52.3172 38.0318 52.2748 38 52.2606 37.9534C52.191 37.7223 51.9904 37.0592 51.9904 37.0592H50.5111C50.5111 37.0592 50.3108 37.7223 50.2409 37.9534C50.227 38 50.1843 38.0318 50.1362 38.0318H49.1844ZM51.7315 36.1952L51.2512 34.6242L50.7701 36.1952H51.7315Z"
          fill="white"
        />
        <path
          d="M39.5047 33.2954C39.4839 33.2746 39.4562 33.263 39.427 33.263H35.8302C35.8014 33.263 35.7736 33.2746 35.7529 33.2954C35.7324 33.3162 35.7208 33.3444 35.7208 33.3737V34.0661C35.7208 34.1274 35.77 34.1769 35.8302 34.1769H37.041V37.9204C37.041 37.9498 37.0528 37.978 37.0732 37.9987C37.0936 38.0195 37.1217 38.0312 37.1505 38.0312H38.1155C38.1447 38.0312 38.1724 38.0195 38.1928 37.9987C38.2133 37.9779 38.225 37.9497 38.225 37.9204V34.1769H39.427C39.4562 34.1769 39.4839 34.1652 39.5047 34.1445C39.5252 34.1237 39.5365 34.0955 39.5365 34.0661V33.3737C39.5365 33.3443 39.5251 33.3161 39.5047 33.2954Z"
          fill="white"
        />
        <path
          d="M48.2688 9.23079H49.6802C45.3402 3.61474 38.5822 0 31 0C23.4178 0 16.6598 3.61474 12.3198 9.23079H13.7312C17.8779 4.26463 24.0779 1.10765 31 1.10765C37.9221 1.10765 44.1221 4.26463 48.2688 9.23079Z"
          fill="#00BDFF"
        />
        <path
          d="M31 47.9999C38.0716 47.9999 44.4285 44.8578 48.7685 39.8769H47.2805C43.1702 44.2006 37.3933 46.8923 31 46.8923C24.6068 46.8923 18.8298 44.2006 14.7196 39.8769H13.2316C17.5716 44.8578 23.9284 47.9999 31 47.9999Z"
          fill="#00BDFF"
        />
      </svg>
    );
  }

  if (icon === "arrow") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.5 10.9999L16.086 10.9999L11.586 6.49994L13 5.08594L19.914 11.9999L13 18.9139L11.586 17.4999L16.086 12.9999L4.5 12.9999L4.5 10.9999Z" />
      </svg>
    );
  }

  return icon;
};

export default Icons;