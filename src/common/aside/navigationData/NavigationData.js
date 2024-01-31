import { FaBookReader, FaUserFriends, FaUsers } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdDashboard, MdWeb, MdDiscFull, MdPayment, MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";

export const navigationData = {
    menus: [
        /* {
            id: "1",
            title: "Dashboard",
            icon: <AiFillDashboard />,
        }, */
        {
            id: "2",
            title: "Members",
            icon: <FaUserFriends />,
            subMenus: [
                {
                    id: "1",
                    title: "Distributer (0)",
                    path: "member-list/distributor"
                },
                {
                    id: "2",
                    title: "Retailer (0)",
                    path: "member-list/retailer"
                },
                {
                    id: "3",
                    title: "Suspended User",

                    path: "suspended-users"
                },
                {
                    id: "1",
                    title: "Not Working User    ",

                    path: "not-working-users"
                },


            ]
        },
        {
            id: "3",
            title: "Reports",
            icon: <BiSolidReport />,
            subMenus: [
                {
                    id: "1",
                    title: "All Transaction Report",

                    path: "all-transactions-report"
                },
                {
                    id: "2",
                    title: "Pending Report",

                    path: "pancard-report"
                },
                {
                    id: "3",
                    title: "Upi Transfer Report",

                    path: "pending-transaction-report"
                },
                {
                    id: "4",
                    title: "Pending Transaction",

                    path: "page-not-found"
                },
                {
                    id: "5",
                    title: "Operator Wise Sale",

                    path: "operator-wise-sale"
                },
                {
                    id: "5",
                    title: "Ledger Report",

                    path: "ledger-report",
                    subSubmenus: [
                        {
                            id: "1",
                            title: "Debit Report",
                            path: "debit-report",
                        },
                        {
                            id: "2",
                            title: "credit Report",
                            path: "credit-report",
                        },
                    ]
                },
            ]
        },
        {
            id: "4",
            title: "Payment:",
            icon: <MdPayment />,
            subMenus: [
                {
                    id: "1",
                    title: "Balance Transfers ",

                    path: "balance-trasnfer"
                },
                {
                    id: "2",
                    title: "Balance Return Request   ",

                    path: "balance-return-request"
                },
                {
                    id: "3",
                    title: "Payment Request View ",

                    path: "payment-request-view"
                },
                {
                    id: "4",
                    title: "Payment Request ",

                    path: "payment-request"
                },

            ]
        },
        {
            id: "5",
            title: "Dispute",
            icon: <MdDiscFull />,
            subMenus: [
                {
                    id: "1",
                    title: "Pending Dispute",

                    path: "page-not-found"
                },
                {
                    id: "1",
                    title: "Solve Dispute",

                    path: "page-not-found"
                },
            ]
        },
        {
            id: "11",
            title: "User Income",
            icon: <FaUsers />,
            subMenus: [
                {
                    id: "1",
                    title: "Distrbuter Income",
                    path: "page-not-found"
                },
                {
                    id: "2",
                    title: "Retailer Income",

                    path: "page-not-found"
                },
            ]
        },
        // ---------------------------
        {
            id: "6",
            title: "Masters",
            icon: <MdDashboard />,
            subMenus: [
                {
                    id: "1",
                    title: "Bank Master",

                    path: "bank-master"
                },
                {
                    id: "2",
                    title: "Role Master",

                    path: "role-master"
                },
                {
                    id: "3",
                    title: "Status Master",

                    path: "status-master"
                },
                {
                    id: "4",
                    title: "Services Master",

                    path: "service-master"
                },
                {
                    id: "5",
                    title: "Payment methods",

                    path: "payment-method"
                },
                {
                    id: "5",
                    title: "Payout Beneficiary ",

                    path: "page-not-found"
                },

                {
                    id: "7",
                    title: "Agent Onboarding",

                    path: "page-not-found"
                },
                {
                    id: "8",
                    title: "Agent Onboarding List (EKO)",

                    path: "page-not-found"
                },
                {
                    id: "9",
                    title: "Contact Enquiry",

                    path: "page-not-found"
                },
                {
                    id: "10",
                    title: "Company Staff Permissions",

                    path: "company-staff-permission"
                },
                {
                    id: "11",
                    title: "Contact Enquiry",

                    path: "page-not-found"
                },
                {
                    id: "12",
                    title: "Cashfree Gateway master",

                    path: "page-not-found"
                },
                {
                    id: "13",
                    title: "Broadcast",

                    path: "boardcast"
                }
            ]
        },
        {
            id: "7",
            title: "APIs Masters",
            icon: <FaBookReader />,
            subMenus: [
                {
                    id: "1",
                    title: "Provider  Master",

                    path: "provider"
                },
                {
                    id: "2",
                    title: "API  Master",

                    path: "page-not-found"
                },
                {
                    id: "3",
                    title: "Denomination Wise APIs Master",

                    path: "page-not-found"
                },
                {
                    id: "1",
                    title: "State Wise APIs Master     ",

                    path: "page-not-found"
                },
                {
                    id: "4",
                    title: "Backup API Master",

                    path: "page-not-found"
                },
                {
                    id: "5",
                    title: "API Switching ",

                    path: "page-not-found"
                },
                {
                    id: "6",
                    title: "User Operator Limit",

                    path: "page-not-found"
                },
                {
                    id: "7",
                    title: "API Vendor Payment",

                    path: "page-not-found"
                },

            ]
        },
        {
            id: "8",
            title: "Settings",
            icon: <AiFillSetting />,
            subMenus: [
                {
                    id: "1",
                    title: "Company Settings",

                    path: "page-not-found"
                },
                {
                    id: "2",
                    title: "Site Settings",

                    path: "page-not-found"
                },
                {
                    id: "3",
                    title: "SMS Settings",

                    path: "page-not-found"
                },
                {
                    id: "4",
                    title: "Package  Settings",

                    path: "page-not-found"
                },
                {
                    id: "5",
                    title: "Bank  Settings",

                    path: "page-not-found"
                },
                {
                    id: "5",
                    title: "Logo Settings ",

                    path: "page-not-found"
                },

                {
                    id: "7",
                    title: "Signature ",

                    path: "page-not-found"
                },
                {
                    id: "8",
                    title: "Service Banner Settings",

                    path: "page-not-found"
                },
                {
                    id: "9",
                    title: "Notifications Settings",

                    path: "page-not-found"
                },

            ]
        },
        {
            id: "9",
            title: "Website Masters:",
            icon: <MdWeb />,
            subMenus: [
                {
                    id: "1",
                    title: "Dynamic Page ",

                    path: "page-not-found"
                },
                {
                    id: "2",
                    title: "Front Banners   ",

                    path: "page-not-found"
                },
                {
                    id: "3",
                    title: "User Panel Slider ",

                    path: "page-not-found"
                },

            ]
        },
        {
            id: "10",
            title: "WhatsApp",
            icon: <IoLogoWhatsapp />,
            subMenus: [
                {
                    id: "1",
                    title: "Send Role Wise ",

                    path: "page-not-found"
                },
            ]
        }

    ]
}
