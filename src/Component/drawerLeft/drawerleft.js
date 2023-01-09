import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import "./drawerleft.css";

export default function BasicList() {
  const [active, setActive] = useState(false);
  return (
    <div className="sidebar overflow-hidden">
      <div className="sidebar-item mt-5">
        <div className="sidebar-title">
          <span>EARN MONEY</span>
        </div>
      </div>
      <hr />
      <div
        className={active ? "sidebar-item active " : "sidebar-item "}
        onClick={() => setActive(!active)}
      >
        <div className="sidebar-title">
          <span>ALL FOOD</span>
          <i class="fa-sharp fa-solid fa-angle-down"></i>
        </div>
        <div className="sidebar-content">POPLULAR KITCHEN</div>
        <div className="sidebar-content">INSTANT FOOD</div>
        <div className="sidebar-content">PRE-ORDER FOOD</div>
        <div className="sidebar-content">WHICH-ORDER</div>
        <div className="sidebar-content">CATERING FOOD</div>
        <div className="sidebar-content">FIND US IN THIS STATE</div>
        <div className="sidebar-content">ALL CATEGORIES</div>
      </div>
      <hr />
      <div className="sidebar-item">
        <div className="sidebar-title">
          <span>CATERING</span>
        </div>
      </div>
      <hr />
      <div className="sidebar-item">
        <div className="sidebar-title">
          <span>FAQ</span>
        </div>
      </div>
      <hr />
      <div className="sidebar-item">
        <div className="sidebar-title">
          <span>BLOG</span>
        </div>
      </div>
    </div>
  );
}
