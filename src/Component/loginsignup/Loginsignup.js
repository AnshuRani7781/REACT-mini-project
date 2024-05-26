import React, { useState } from "react";
import "./Loginsignup.css";
import "boxicons";
const src1 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAb1JREFUSEvN1k3ITUEYB/DfK18lJcmOhCyUKCs7lGJhQcpGoXyUlJ0US5LsUD42rFCilLKwYMVCCYWVfKWUkgUbCTN1jt6ue95nzts5XbOd5/x/M819Zu6YEY2xEbkmA0/BNiyvFv0SN/C7zSbawmtwBcsGkFfYiceleBt4Pe5iekP4d2zAoxK8FJ6F95gbhH7AUvyI8FJ4Ly5FYdV8Pv+bUW0pfAH7o7Bq/jQOR7Wl8EXsi8Kq+fM4ENWWwkdxPAqr5o/gVFRbCueefRGFVb28JLXWm6i2FM45l7ErCDyDQxGa59vAM6obanNDcF7YHvzqGq4XugNbxvX0J1zD7RKwrmmz4za5Ye1/Dy/A1nQjrUiPxKLUWlMHtvQz/fDepiN4hlv4GG052vFKnMSmKGhg/k51e+VXa+iYCM431TlMa4nW5fmh2J2e0KvDvm+Ct+P6JMHxn+XW2oh7g1nD4Plppe8wswM4R3zBQuT3+u8YBp/FwY7QOuZYOrITEfw5ne28juEnWD0RvBivO0bruNn41nRz5T9zD3uCc2s+b4LX4n5P8Do8aILnYFVP8FN8bYJ7Mv+Nja7M3hYyMvgPElg8H/XErXYAAAAASUVORK5CYII=";
const src2 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAa9JREFUSEvtlj8oRXEUxz9PSmKxWFgU2chEmWws2CySTRZKkpB/IUmKRTbJYsNAJpNiEpsoC4vFQlLCPa9z6/Trve6fd3nKe3V7t3PP7/s559zfueeXIk+/VJ64FMC/Vnm31JPAIFCVcASPwCaw6OtacAdwlDDQlWsHTsRowZLtgnq+AmUJBWG1hLHkgmc8w6zCaoBdoDVH+BnQC9yrzpzPsBlbsNjlGtYISyMG8AZMAOvAl14ikREs2QrcrUStZt8cEn6hWd4Zf4GHAu8DA8CTLigCRoF5oCRLAO/ANLDq/X+qTyWwBXSHBYvfMzACbBtQPbAHNDrwK6AHuDH2fmDNK3eFsQWW2uqeAn3AgxqLgXHNTkxShWXgQ59XAztAW4bKRALL+hdPeArYMBulQYWvzb4Y0pYsz/I6IoN9nXPN/tYRrtMsWwI2YGyw6MomEoEVhYxpN2TbdDaWnMC+0KXeNIVss1DtFEErkmsiGUciRunjOMJBa/5WxnYsBkUe97l8C9KHATudOoGDuIoh13UBhy5YBoF80OUk8hNHn2MdPOkBUjjehnxVubv9v1J/AzG/WB9938PnAAAAAElFTkSuQmCC";
const src3 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAWpJREFUSEvt1j9LHkEQx/GPELCwsAqKYBAFsdVop5AU2ukLCIG0YqFgIShWAcugVpIyhLyAgBACgqIpBbGzUFAQIkGwsUjjn+dki3Bmvb1H4QG57fZm5vfdmZsdtkmDVlODuOoBv0A/XodD72IPV2WSKAPOfOcxh9Yc5AIfsZIKLwP+ivcFwsuYTYGngt/hWxA8CeLbYf8Gn/Aq7EexUQRPBR+hG1lJe3GeE26vVeMQLfiFkacA9wTRTGsRSxHR7PsCrkMPXD4ET8l4GDtBZBzrEcGJWrd/D7YhZN0eXSng7B9uBoW32IqopfrdhVfgf6s4gDH04UMwfMFxpNRdOb8D/AxT7V5IrNQzZaZQwdWZxOe8Twz8By+L7mKi/RSdqeCbRNFUt3sJxjKuwKkljflVpY6OzKq5nn9znaHtsWmG+N/oSB2Z01h9IvBULYm1VHDmN4jsxdhc5wH+4gf2/xef8gKpk/twWMPAt+OeQh8W8oqIAAAAAElFTkSuQmCC";
function Loginsignup() {
  let [value, action] = useState("Sign Up");
  return (
    <>
      <div className="Container">
        <div className="Header">
          <div className="text">{value}</div>
          <div className="Underline"></div>
        </div>
        <div className="Inputs">
          {value === "Login" ? (
            <div></div>
          ) : (
            <div className="Input">
              <img src={src1} />
              <input type="text" placeholder="Name"></input>
            </div>
          )}
          <div className="Input">
            <img src={src2} />
            <input type="email" placeholder="email"></input>
          </div>
          <div className="Input">
            <img src={src3} />
            <input type="password" placeholder="password"></input>
          </div>
        </div>
        {value === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forget-passwoord">
            forget Password? <span>RESET</span>
          </div>
        )}
        <div className="Submit-Container">
          <div
            className={value === "Login" ? "Submit" : "Submit grey"}
            onClick={() => {
              action((value = "Login"));
            }}
          >
            Login
          </div>
          <div
            className={value === "Sign Up" ? "Submit" : "Submit grey"}
            onClick={() => {
              action((value = "Sign Up"));
            }}
          >
            Sign Up
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginsignup;
