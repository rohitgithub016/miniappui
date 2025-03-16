const AirdropSVG = ({ color = "#692DF6" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M12.5 2C8.08172 2 4.5 5.13401 4.5 9H20.5C20.5 5.13401 16.9183 2 12.5 2Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 17.3333C8.5 15.4029 8.84533 15 10.5 15H14.5C16.1547 15 16.5 15.4029 16.5 17.3333V19.6667C16.5 21.5971 16.1547 22 14.5 22H10.5C8.84533 22 8.5 21.5971 8.5 19.6667V17.3333Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M12.509 17.5H12.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M4.5 9L12.5 15L20.5 9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default AirdropSVG;
  