import { FaBookReader, FaFileContract, FaUserFriends, FaUsers } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdDashboard, MdWeb, MdDiscFull, MdPayment } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { SiConvertio, SiQzone } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";
import { useEffect } from "react";
import { getLength } from "../../../api/login/Login";


/* export const getN = (count)=>{
  count?.user.find((cItm)=>{
    ret_Data(cItm);
  })
} */

export const navigationData = (count) => {
  const membersTypes = [
  ]
  count?.user?.forEach(element => {
    membersTypes.push({
      uniqueId: element._id,
      id: element._id,
      title: element?.memeberType + `(${element?.count})`,
      path: `member-list/${element._id}/${element.memeberType}`,
    },)
  });
  membersTypes.push({
    uniqueId: "submenu_2_3",
    id: "3",
    title: "Suspended User",
    path: "suspended-users",
  },
  )
  membersTypes.push({
    uniqueId: "submenu_2_4",
    id: "4",
    title: "White List User",
    path: "suspended-users",
  },
  )
  membersTypes.push({
    uniqueId: "submenu_2_4",
    id: "4",
    title: "Not Working User",
    path: "not-working-users",
  },
  )
  return [
    {
      uniqueId: "menu_2",
      id: "2",
      title: "Members",
      icon: <FaUserFriends />,
      subMenus: membersTypes,
    },
    {
      uniqueId: "menu_3",
      id: "3",
      title: "Reports",
      icon: <BiSolidReport />,
      subMenus: [
        {
          uniqueId: "submenu_3_1",
          id: "1",
          title: "All Transaction Report",
          path: "all-transactions-report",
        },
        {
          uniqueId: "submenu_3_2",
          id: "2",
          title: "Pancard Report",
          path: "pancard-report",
        },
        {
          uniqueId: "submenu_3_3",
          id: "3",
          title: "Upi Transfer Report",
          path: "pending-transaction-report",
        },
        {
          uniqueId: "submenu_3_4",
          id: "4",
          title: "Pending Transaction",
          path: "pending-transaction-report",
        },
        {
          uniqueId: "submenu_3_5",
          id: "5",
          title: "Operator Wise Sale",
          path: "operator-wise-sale",
        },
        {
          uniqueId: "subsubmenu_3_6",
          id: "1",
          title: "Debit Report",
          path: "debit-report",
        },
        {
          uniqueId: "subsubmenu_3_7",
          id: "2",
          title: "Credit Report",
          path: "credit-report",
        },
        /* {
          uniqueId: "submenu_3_6",
          id: "6",
          title: "Ledger Report",
          path: "ledger-report",
          subSubmenus: [
            {
              uniqueId: "subsubmenu_3_6_1",
              id: "1",
              title: "Debit Report",
              path: "debit-report",
            },
            {
              uniqueId: "subsubmenu_3_6_2",
              id: "2",
              title: "Credit Report",
              path: "credit-report",
            },
          ],
        }, */
      ],
    },
    {
      uniqueId: "menu_15",
      id: "3",
      title: "Sales Reports",
      icon: <FaFileContract />,
      subMenus: [
        {
          uniqueId: "submenu_15_1",
          id: "1",
          title: "Summary Report",
          path: "summary-report",
        },
        {
          uniqueId: "submenu_15_2",
          id: "2",
          title: "Performance Report",
          path: "performance-report",
        },
      ],
    },
    {
      uniqueId: "menu_4",
      id: "4",
      title: "Payment",
      icon: <MdPayment />,
      subMenus: [
        {
          uniqueId: "submenu_4_1",
          id: "1",
          title: "Balance Transfers ",
          path: "balance-trasnfer",
        },
        {
          uniqueId: "submenu_4_2",
          id: "2",
          title: "Balance Return Request   ",
          path: "balance-return-request",
        },
        {
          uniqueId: "submenu_4_3",
          id: "3",
          title: "Payment Request View ",
          path: "payment-request-view",
        },
        {
          uniqueId: "submenu_4_4",
          id: "4",
          title: "Payment Request ",
          path: "payment-request",
        },
      ],
    },
    {
      uniqueId: "menu_5",
      id: "5",
      title: "Dispute",
      icon: <MdDiscFull />,
      subMenus: [
        {
          uniqueId: "submenu_5_1",
          id: "1",
          title: "Pending Dispute",
          path: "pending-dispute",
        },
        {
          uniqueId: "submenu_5_2",
          id: "2",
          title: "Solve Dispute",
          path: "solve-dispute",
        },
      ],
    },
    {
      uniqueId: "menu_11",
      id: "11",
      title: "User Income",
      icon: <FaUsers />,
      subMenus: [
        {
          uniqueId: "submenu_11_1",
          id: "1",
          title: "Distributor Income",
          path: "user-income/distributor",
        },
        {
          uniqueId: "submenu_11_2",
          id: "2",
          title: "Retailer Income",
          path: "user-income/retailer",
        },
        {
          uniqueId: "submenu_11_3",
          id: "2",
          title: "My Income",
          path: "income/my-income",
        },
      ],
    },
    {
      uniqueId: "menu_6",
      id: "6",
      title: "Masters",
      icon: <MdDashboard />,
      subMenus: [
        {
          uniqueId: "submenu_6_1",
          id: "1",
          title: "Bank Master",
          path: "bank-master",
        },
        {
          uniqueId: "submenu_6_2",
          id: "2",
          title: "Role Master",
          path: "role-master",
        },
        {
          uniqueId: "submenu_6_3",
          id: "3",
          title: "Status Master",
          path: "status-master",
        },
        {
          uniqueId: "submenu_6_4",
          id: "4",
          title: "Services Master",
          path: "service-master",
        },
        {
          uniqueId: "submenu_6_5",
          id: "5",
          title: "Services Category Master",
          path: "service-category",
        },
        {
          uniqueId: "submenu_6_6",
          id: "6",
          title: "Payment methods",
          path: "payment-method",
        },
        {
          uniqueId: "submenu_6_7",
          id: "7",
          title: "Payout Beneficiary ",
          path: "payout-beneficiary-master",
        },
        {
          uniqueId: "submenu_6_8",
          id: "8",
          title: "Agent Onboarding",
          path: "agent-onboarding-list",
        },
        {
          uniqueId: "submenu_6_9",
          id: "9",
          title: "Agent Onboarding List (EKO)",
          path: "agent-onboarding-list",
        },
        {
          uniqueId: "submenu_6_10",
          id: "10",
          title: "Contact Enquiry",
          path: "contact-enquiry",
        },
        {
          uniqueId: "submenu_6_11",
          id: "11",
          title: "Company Staff Permissions",
          path: "company-staff/welcome",
        },
        /* {
          uniqueId: "submenu_6_12",
          id: "12",
          title: "Contact Enquiry",
          path: "page-not-found",
        }, */
        {
          uniqueId: "submenu_6_13",
          id: "13",
          title: "Cashfree Gateway master",
          path: "cashfree-gateway-master",
        },
        {
          uniqueId: "submenu_6_14",
          id: "14",
          title: "Broadcast",
          path: "boardcast",
        },
      ],
    },
    {
      uniqueId: "menu_16",
      id: "16",
      title: "Zone Module",
      icon: <SiQzone />,
      subMenus: [
        {
          uniqueId: "submenu_16_22",
          id: "6",
          title: "Zoon & Ares",
          path: "zoon_area",
        },
        {
          uniqueId: "submenu_16_1",
          id: "1",
          title: "Area",
          path: "area",
        },
        {
          uniqueId: "submenu_16_2",
          id: "2",
          title: "Country",
          path: "country-zone",
        },
        {
          uniqueId: "submenu_16_3",
          id: "3",
          title: "State",
          path: "page-not-found",
        },
        {
          uniqueId: "submenu_16_4",
          id: "4",
          title: "District",
          path: "page-not-found",
        },

      ],
    },
    {
      uniqueId: "menu_17",
      id: "17",
      title: "Setup & Configurations",
      icon: <SiQzone />,
      subMenus: [
        {
          uniqueId: "submenu_17_1",
          id: "1",
          title: "Country",
          path: "country",
        },
        {
          uniqueId: "submenu_17_2",
          id: "2",
          title: "Language",
          path: "language",
        },
        {
          uniqueId: "submenu_18_3",
          id: "3",
          title: "Currency",
          path: "currency",
        },
        {
          uniqueId: "submenu_19_4",
          id: "4",
          title: "State Master",
          path: "state-master",
        },
      ],
    },
    {
      uniqueId: "menu_7",
      id: "7",
      title: "APIs Masters",
      icon: <FaBookReader />,
      subMenus: [
        {
          uniqueId: "submenu_7_1",
          id: "1",
          title: "Provider  Master",
          path: "provider",
        },
        {
          uniqueId: "submenu_7_2",
          id: "2",
          title: "API  Master",
          path: "api-master",
        },
        {
          uniqueId: "submenu_7_2",
          id: "3",
          title: "Api Transaction Master",
          path: "api-transaction-master",
        },
        {
          uniqueId: "submenu_7_3",
          id: "4",
          title: "Denomination Wise APIs Master",
          path: "denomination-wise-api",
        },
        {
          uniqueId: "submenu_7_4",
          id: "5",
          title: "State Wise APIs Master     ",
          path: "state-wise-api",
        },
        {
          uniqueId: "submenu_7_5",
          id: "6",
          title: "Backup API Master",
          path: "backup-api-master",
        },
        {
          uniqueId: "submenu_7_6",
          id: "7",
          title: "API Switching ",
          path: "api-switching",
        },
        {
          uniqueId: "submenu_7_7",
          id: "8",
          title: "User Operator Limit",
          path: "user-operator-limit",
        },
        {
          uniqueId: "submenu_7_8",
          id: "9",
          title: "API Vendor Payment",
          path: "vandor/payment/welcome",
        },
        {
          uniqueId: "submenu_7_9",
          id: "10",
          title: "Number Series Master",
          path: "number-series-master",
        },
      ],
    },
    {
      uniqueId: "menu_12",
      id: "12",
      title: "Customer",
      icon: <FcCustomerSupport />,
      subMenus: [
        {
          uniqueId: "submenu_12_1",
          id: "1",
          title: "User",
          path: "user",
        },
        {
          uniqueId: "submenu_12_2",
          id: "2",
          title: "User Type",
          path: "user-type",
        },
      ],
    },
    {
      uniqueId: "menu_8",
      id: "8",
      title: "Settings",
      icon: <AiFillSetting />,
      subMenus: [
        {
          uniqueId: "submenu_8_1",
          id: "1",
          title: "Company Settings",
          path: "company-setting",
        },
        {
          uniqueId: "submenu_8_2",
          id: "2",
          title: "Site Settings",
          path: "site-setting/welcome",
        },
        {
          uniqueId: "submenu_8_3",
          id: "3",
          title: "SMS Settings",
          path: "sms-templete/welcome",
        },
        {
          uniqueId: "submenu_8_4",
          id: "4",
          title: "Package  Settings",
          path: "package-settings",
        },
        {
          uniqueId: "submenu_8_5",
          id: "5",
          title: "Bank  Settings",
          path: "bank-settings",
        },
        {
          uniqueId: "submenu_8_6",
          id: "6",
          title: "Logo Settings ",
          path: "logo-upload",
        },
        {
          uniqueId: "submenu_8_7",
          id: "7",
          title: "Signature ",
          path: "signature-upload",
        },
        {
          uniqueId: "submenu_8_8",
          id: "8",
          title: "Service Banner Settings",
          path: "service-banner",
        },
        {
          uniqueId: "submenu_8_9",
          id: "9",
          title: "Notifications Settings",
          path: "notification/welcome",
        },
      ],
    },
    {
      uniqueId: "menu_9",
      id: "9",
      title: "Website Masters",
      icon: <MdWeb />,
      subMenus: [
        {
          uniqueId: "submenu_9_1",
          id: "1",
          title: "Dynamic Page ",
          path: "dynemic-page",
        },
        {
          uniqueId: "submenu_9_2",
          id: "2",
          title: "Front Banners   ",
          path: "front-banner",
        },
        {
          uniqueId: "submenu_9_3",
          id: "3",
          title: "User Panel Slider ",
          path: "user-pannel-slider",
        },
      ],
    },
    {
      uniqueId: "menu_10",
      id: "10",
      title: "WhatsApp",
      icon: <IoLogoWhatsapp />,
      subMenus: [
        {
          uniqueId: "submenu_10_1",
          id: "1",
          title: "Send Role Wise ",
          path: "whatapp/send-role-wise",
        },
      ],
    },
    {
      uniqueId: "menu_13",
      id: "13",
      title: "Staff Module",
      icon: <IoIosPeople />,
      subMenus: [
        {
          uniqueId: "submenu_13_1",
          id: "1",
          title: "Staff",
          path: "satff",
        },
        {
          uniqueId: "submenu_13_2",
          id: "2",
          title: "Staff Type",
          path: "staff-type",
        },
      ],
    },
    {
      uniqueId: "menu_14",
      id: "14",
      title: "Service Permission",
      icon: <IoIosPeople />,
      subMenus: [
        {
          uniqueId: "submenu_14_1",
          id: "1",
          title: "Service Area Permision",
          path: "service-area-permision",
        },
        {
          uniqueId: "submenu_13_2",
          id: "2",
          title: "Service User Permission",
          path: "service-user-permission",
        },
      ],
    },
    {
      uniqueId: "menu_15",
      id: "15",
      title: "DMT",
      icon: <SiConvertio />,
      subMenus: [
        {
          uniqueId: "submenu_15_1",
          id: "1",
          title: "DMT Commision",
          path: "dmt-commision",
        },
        {
          uniqueId: "submenu_15_2",
          id: "2",
          title: "DMT Commsion Scheme",
          path: "dmt-commision-scheme",
        },
      ],
    },
  ]
}

