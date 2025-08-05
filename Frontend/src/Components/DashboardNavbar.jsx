import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../Redux/Auth/auth.action";

const DashboardNavbar = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  let username = userData;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAPI());
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid gray",
        borderLeft: "none",
        width: "100%",
        height: "7%",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <div style={{ width: "25%", marginLeft: "20px" }}>
        <div style={{ position: "relative" }}>
          <i
            className="fas fa-search"
            style={{
              position: "absolute",
              top: "50%",
              left: "8px",
              transform: "translateY(-50%)",
              color: "gray",
            }}
          ></i>
          <input
            type="text"
            placeholder="Search"
            style={{
              height: "32px",
              paddingLeft: "25px",
              borderRadius: "4px",
              border: "1px solid lightblue",
              width: "100%",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          width: "60%",
          justifyContent: "flex-end",
          gap: 20,
          marginRight: 20,
        }}
      >
        <button
          style={{
            backgroundColor: "teal",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          Start Free Trial
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid black",
            borderRadius: 7,
            padding: "5px 10px",
          }}
        >
          <i
            className="fas fa-clock"
            style={{ fontSize: "20px", cursor: "pointer" }}
          ></i>
          <span style={{ cursor: "pointer" }}>Start Timer</span>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: 7,
              padding: "5px 10px",
            }}
            onClick={toggleDropdown}
          >
            <i className="fas fa-user"></i>
            <span>
              {username} <i className="fas fa-angle-down"></i>
            </span>
          </div>

          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                backgroundColor: "white",
                minWidth: "200px",
                border: "1px solid #ccc",
                zIndex: "1",
              }}
            >
              {[
                "Get Bonsai Free",
                "Help Center",
                "What's New",
                "My Subscription",
                "Apps & Integrations",
                "Payments",
                "Setting",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "10px 15px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  {item}
                </div>
              ))}
              <div
                style={{ padding: "10px 15px", cursor: "pointer" }}
                onClick={handleLogout}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
