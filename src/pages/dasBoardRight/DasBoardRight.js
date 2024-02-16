import { useEffect, useState } from "react";
import DearMearchantPopUp from "../../common/dearMearchantPopUp/DearMearchantPopUp"
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";

function DasBoardRight() {
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        setModalShow(true)
    }, [])
    const breadCrumbsTitle = {
        id:"1",
        title_1:"Dashboard",
        path_1:"/admin",
    }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 wid-100">
                        <div className="row">
                            <div className="col-xl-3 col-sm-6">
                                <div className="card chart-grd same-card">
                                    <div className="card-body depostit-card p-0" style={{ position: 'relative' }}>
                                        <div className="depostit-card-media d-flex justify-content-between pb-0">
                                            <div>
                                                <h6>Total Deposit</h6>
                                                <h3>$1200.00</h3>
                                            </div>
                                            <div className="icon-box bg-primary-light">
                                                <svg width={12} height={20} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z" fill="var(--primary)" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: 218, height: 116 }} /></div><div className="contract-trigger" /></div></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="card same-card">
                                    <div className="card-body d-flex align-items-center  py-2" style={{ position: 'relative' }}>

                                        <ul className="project-list">
                                            <li><h6>All Projects</h6></li>
                                            <li>
                                                <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width={10} height={10} rx={3} fill="#3AC977" />
                                                </svg>
                                                Compete
                                            </li>
                                            <li>
                                                <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width={10} height={10} rx={3} fill="var(--primary)" />
                                                </svg>
                                                Pending
                                            </li>
                                            <li>
                                                <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width={10} height={10} rx={3} fill="var(--secondary)" />
                                                </svg>
                                                Not Start
                                            </li>
                                        </ul>
                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: 218, height: 119 }} /></div><div className="contract-trigger" /></div></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="card chart-grd same-card">
                                    <div className="card-body depostit-card p-0" style={{ position: 'relative' }}>
                                        <div className="depostit-card-media d-flex justify-content-between pb-0">
                                            <div>
                                                <h6>Total Expenses</h6>
                                                <h3>$1200.00</h3>
                                            </div>
                                            <div className="icon-box bg-danger-light">
                                                <svg width={12} height={20} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z" fill="#FF5E5E" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: 218, height: 116 }} /></div><div className="contract-trigger" /></div></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 same-card">
                                <div className="card">
                                    <div className="card-body depostit-card">
                                        <div className="depostit-card-media d-flex justify-content-between style-1">
                                            <div>
                                                <h6>Total Deposit</h6>
                                                <h3>20</h3>
                                            </div>
                                            <div className="icon-box bg-primary-light">
                                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.3787 1.875H15.625V1.25C15.625 1.08424 15.5592 0.925268 15.4419 0.808058C15.3247 0.690848 15.1658 0.625 15 0.625C14.8342 0.625 14.6753 0.690848 14.5581 0.808058C14.4408 0.925268 14.375 1.08424 14.375 1.25V1.875H10.625V1.25C10.625 1.08424 10.5592 0.925268 10.4419 0.808058C10.3247 0.690848 10.1658 0.625 10 0.625C9.83424 0.625 9.67527 0.690848 9.55806 0.808058C9.44085 0.925268 9.375 1.08424 9.375 1.25V1.875H5.625V1.25C5.625 1.08424 5.55915 0.925268 5.44194 0.808058C5.32473 0.690848 5.16576 0.625 5 0.625C4.83424 0.625 4.67527 0.690848 4.55806 0.808058C4.44085 0.925268 4.375 1.08424 4.375 1.25V1.875H3.62125C2.99266 1.87599 2.3901 2.12614 1.94562 2.57062C1.50114 3.0151 1.25099 3.61766 1.25 4.24625V17.0037C1.25099 17.6323 1.50114 18.2349 1.94562 18.6794C2.3901 19.1239 2.99266 19.374 3.62125 19.375H16.3787C17.0073 19.374 17.6099 19.1239 18.0544 18.6794C18.4989 18.2349 18.749 17.6323 18.75 17.0037V4.24625C18.749 3.61766 18.4989 3.0151 18.0544 2.57062C17.6099 2.12614 17.0073 1.87599 16.3787 1.875ZM17.5 17.0037C17.499 17.3008 17.3806 17.5854 17.1705 17.7955C16.9604 18.0056 16.6758 18.124 16.3787 18.125H3.62125C3.32418 18.124 3.03956 18.0056 2.8295 17.7955C2.61944 17.5854 2.50099 17.3008 2.5 17.0037V4.24625C2.50099 3.94918 2.61944 3.66456 2.8295 3.4545C3.03956 3.24444 3.32418 3.12599 3.62125 3.125H4.375V3.75C4.375 3.91576 4.44085 4.07473 4.55806 4.19194C4.67527 4.30915 4.83424 4.375 5 4.375C5.16576 4.375 5.32473 4.30915 5.44194 4.19194C5.55915 4.07473 5.625 3.91576 5.625 3.75V3.125H9.375V3.75C9.375 3.91576 9.44085 4.07473 9.55806 4.19194C9.67527 4.30915 9.83424 4.375 10 4.375C10.1658 4.375 10.3247 4.30915 10.4419 4.19194C10.5592 4.07473 10.625 3.91576 10.625 3.75V3.125H14.375V3.75C14.375 3.91576 14.4408 4.07473 14.5581 4.19194C14.6753 4.30915 14.8342 4.375 15 4.375C15.1658 4.375 15.3247 4.30915 15.4419 4.19194C15.5592 4.07473 15.625 3.91576 15.625 3.75V3.125H16.3787C16.6758 3.12599 16.9604 3.24444 17.1705 3.4545C17.3806 3.66456 17.499 3.94918 17.5 4.24625V17.0037Z" fill="var(--primary)" />
                                                    <path d="M7.68311 7.05812L6.24999 8.49125L5.44186 7.68312C5.38421 7.62343 5.31524 7.57581 5.23899 7.54306C5.16274 7.5103 5.08073 7.49306 4.99774 7.49234C4.91475 7.49162 4.83245 7.50743 4.75564 7.53886C4.67883 7.57028 4.60905 7.61669 4.55037 7.67537C4.49168 7.73406 4.44528 7.80384 4.41385 7.88065C4.38243 7.95746 4.36661 8.03976 4.36733 8.12275C4.36805 8.20573 4.3853 8.28775 4.41805 8.364C4.45081 8.44025 4.49842 8.50922 4.55811 8.56687L5.80811 9.81687C5.92532 9.93404 6.08426 9.99986 6.24999 9.99986C6.41572 9.99986 6.57466 9.93404 6.69186 9.81687L8.56686 7.94187C8.68071 7.82399 8.74371 7.66612 8.74229 7.50224C8.74086 7.33837 8.67513 7.18161 8.55925 7.06573C8.44337 6.94985 8.28661 6.88412 8.12274 6.8827C7.95887 6.88127 7.80099 6.94427 7.68311 7.05812Z" fill="var(--primary)" />
                                                    <path d="M15 8.125H10.625C10.4592 8.125 10.3003 8.19085 10.1831 8.30806C10.0658 8.42527 10 8.58424 10 8.75C10 8.91576 10.0658 9.07473 10.1831 9.19194C10.3003 9.30915 10.4592 9.375 10.625 9.375H15C15.1658 9.375 15.3247 9.30915 15.4419 9.19194C15.5592 9.07473 15.625 8.91576 15.625 8.75C15.625 8.58424 15.5592 8.42527 15.4419 8.30806C15.3247 8.19085 15.1658 8.125 15 8.125Z" fill="var(--primary)" />
                                                    <path d="M7.68311 12.6831L6.24999 14.1162L5.44186 13.3081C5.38421 13.2484 5.31524 13.2008 5.23899 13.1681C5.16274 13.1353 5.08073 13.1181 4.99774 13.1173C4.91475 13.1166 4.83245 13.1324 4.75564 13.1639C4.67883 13.1953 4.60905 13.2417 4.55037 13.3004C4.49168 13.3591 4.44528 13.4288 4.41385 13.5056C4.38243 13.5825 4.36661 13.6648 4.36733 13.7477C4.36805 13.8307 4.3853 13.9127 4.41805 13.989C4.45081 14.0653 4.49842 14.1342 4.55811 14.1919L5.80811 15.4419C5.92532 15.559 6.08426 15.6249 6.24999 15.6249C6.41572 15.6249 6.57466 15.559 6.69186 15.4419L8.56686 13.5669C8.68071 13.449 8.74371 13.2911 8.74229 13.1272C8.74086 12.9634 8.67513 12.8066 8.55925 12.6907C8.44337 12.5749 8.28661 12.5091 8.12274 12.5077C7.95887 12.5063 7.80099 12.5693 7.68311 12.6831Z" fill="var(--primary)" />
                                                    <path d="M15 13.75H10.625C10.4592 13.75 10.3003 13.8158 10.1831 13.9331C10.0658 14.0503 10 14.2092 10 14.375C10 14.5408 10.0658 14.6997 10.1831 14.8169C10.3003 14.9342 10.4592 15 10.625 15H15C15.1658 15 15.3247 14.9342 15.4419 14.8169C15.5592 14.6997 15.625 14.5408 15.625 14.375C15.625 14.2092 15.5592 14.0503 15.4419 13.9331C15.3247 13.8158 15.1658 13.75 15 13.75Z" fill="var(--primary)" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="progress-box mt-0">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-0">Tasks Not Finished</p>
                                                <p className="mb-0">20/28</p>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar bg-primary" style={{ width: '50%', height: 5, borderRadius: 4 }} role="progressbar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card overflow-hidden">
                                    <div className="card-header border-0 pb-0 flex-wrap">
                                        <h4 className="heading mb-0">Projects Overview</h4>
                                        <ul className="nav nav-pills mix-chart-tab" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" data-series="week" id="pills-week-tab" data-bs-toggle="pill" data-bs-target="#pills-week" type="button" role="tab" aria-selected="true">Week</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" data-series="month" id="pills-month-tab" data-bs-toggle="pill" data-bs-target="#pills-month" type="button" role="tab" aria-selected="false" tabIndex={-1}>Month</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" data-series="year" id="pills-year-tab" data-bs-toggle="pill" data-bs-target="#pills-year" type="button" role="tab" aria-selected="false" tabIndex={-1}>Year</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" data-series="all" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-selected="false" tabIndex={-1}>All</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body  p-0" style={{ position: 'relative' }}>

                                        <div className="ttl-project">
                                            <div className="pr-data">
                                                <h5>12,721</h5>
                                                <span>Number of Projects</span>
                                            </div>
                                            <div className="pr-data">
                                                <h5 className="text-primary">721</h5>
                                                <span>Active Projects</span>
                                            </div>
                                            <div className="pr-data">
                                                <h5>$2,50,523</h5>
                                                <span>Revenue</span>
                                            </div>
                                            <div className="pr-data">
                                                <h5 className="text-success">12,275h</h5>
                                                <span>Working Hours</span>
                                            </div>
                                        </div>
                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: 624, height: 386 }} /></div><div className="contract-trigger" /></div></div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-header border-0">
                                        <h4 className="heading mb-0">My To Do Items</h4>
                                        <div>
                                            <a href="javascript:void(0);" className="text-primary me-2">View All</a>
                                            <a href="javascript:void(0);" className="text-black"> + Add To Do</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="dt-do-bx">
                                            <div className="draggable-zone dropzoneContainer to-dodroup dz-scroll" tabIndex={0}>
                                                <div className="sub-card draggable-handle draggable" tabIndex={0}>
                                                    <div className="d-items">
                                                        <span className="text-warning dang d-block mb-2">
                                                            <svg className="me-1" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.61051 15.3276H14.3978C15.5843 15.3276 16.329 14.0451 15.7395 13.0146L10.35 3.59085C9.75676 2.5536 8.26126 2.55285 7.66726 3.5901L2.26876 13.0139C1.67926 14.0444 2.42326 15.3276 3.61051 15.3276Z" stroke="#FF9F00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M9.00189 10.0611V7.7361" stroke="#FF9F00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M8.99625 12.375H9.00375" stroke="#FF9F00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            Latest to do's
                                                        </span>
                                                        <div className="d-flex justify-content-between flex-wrap">
                                                            <div className="d-items-2">
                                                                <div>
                                                                    <svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width={1} height={1} fill="#888888" />
                                                                        <rect y={3} width={1} height={1} fill="#888888" />
                                                                        <rect y={6} width={1} height={1} fill="#888888" />
                                                                        <rect y={9} width={1} height={1} fill="#888888" />
                                                                        <rect y={12} width={1} height={1} fill="#888888" />
                                                                        <rect y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={15} width={1} height={1} fill="#888888" />
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <div className="form-check custom-checkbox">
                                                                        <input type="checkbox" className="form-check-input" id="customCheckBox1" required />
                                                                        <label className="form-check-label" htmlFor="customCheckBox1">Compete this projects Monday</label>
                                                                    </div>
                                                                    <span>2023-12-26 07:15:00</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="icon-box icon-box-md bg-danger-light me-1">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div className="icon-box icon-box-md bg-primary-light">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.16492 13.6286H14" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M7.34723 4.00059L10.9821 6.79201" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sub-card draggable-handle draggable" tabIndex={0}>
                                                    <div className="d-items">
                                                        <span className="text-success dang d-block mb-2">
                                                            <svg className="me-1" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15 4.5L6.75 12.75L3 9" stroke="#3AC977" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            Latest finished to do's
                                                        </span>
                                                        <div className="d-flex justify-content-between flex-wrap">
                                                            <div className="d-items-2">
                                                                <div>
                                                                    <svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width={1} height={1} fill="#888888" />
                                                                        <rect y={3} width={1} height={1} fill="#888888" />
                                                                        <rect y={6} width={1} height={1} fill="#888888" />
                                                                        <rect y={9} width={1} height={1} fill="#888888" />
                                                                        <rect y={12} width={1} height={1} fill="#888888" />
                                                                        <rect y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={15} width={1} height={1} fill="#888888" />
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <div className="form-check custom-checkbox">
                                                                        <input type="checkbox" className="form-check-input" id="customCheckBox02" required />
                                                                        <label className="form-check-label" htmlFor="customCheckBox02">Compete this projects Monday</label>
                                                                    </div>
                                                                    <span>2023-12-26 07:15:00</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="icon-box icon-box-md bg-danger-light me-1">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div className="icon-box icon-box-md bg-primary-light">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.16492 13.6286H14" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M7.34723 4.00059L10.9821 6.79201" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sub-card draggable-handle draggable" tabIndex={0}>
                                                    <div className="d-items">
                                                        <div className="d-flex justify-content-between flex-wrap">
                                                            <div className="d-items-2">
                                                                <div>
                                                                    <svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width={1} height={1} fill="#888888" />
                                                                        <rect y={3} width={1} height={1} fill="#888888" />
                                                                        <rect y={6} width={1} height={1} fill="#888888" />
                                                                        <rect y={9} width={1} height={1} fill="#888888" />
                                                                        <rect y={12} width={1} height={1} fill="#888888" />
                                                                        <rect y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={15} width={1} height={1} fill="#888888" />
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <div className="form-check custom-checkbox">
                                                                        <input type="checkbox" className="form-check-input" id="customCheckBox03" required />
                                                                        <label className="form-check-label" htmlFor="customCheckBox03">Compete this projects Monday</label>
                                                                    </div>
                                                                    <span>2023-12-26 07:15:00</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="icon-box icon-box-md bg-danger-light me-1">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div className="icon-box icon-box-md bg-primary-light">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.16492 13.6286H14" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M7.34723 4.00059L10.9821 6.79201" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sub-card draggable-handle draggable" tabIndex={0}>
                                                    <div className="d-items">
                                                        <div className="d-flex justify-content-between flex-wrap">
                                                            <div className="d-items-2">
                                                                <div>
                                                                    <svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width={1} height={1} fill="#888888" />
                                                                        <rect y={3} width={1} height={1} fill="#888888" />
                                                                        <rect y={6} width={1} height={1} fill="#888888" />
                                                                        <rect y={9} width={1} height={1} fill="#888888" />
                                                                        <rect y={12} width={1} height={1} fill="#888888" />
                                                                        <rect y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={15} width={1} height={1} fill="#888888" />
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <div className="form-check custom-checkbox">
                                                                        <input type="checkbox" className="form-check-input" id="customCheckBox4" required />
                                                                        <label className="form-check-label" htmlFor="customCheckBox4">Compete this projects Monday</label>
                                                                    </div>
                                                                    <span>2023-12-26 07:15:00</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="icon-box icon-box-md bg-danger-light me-1">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div className="icon-box icon-box-md bg-primary-light">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.16492 13.6286H14" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M7.34723 4.00059L10.9821 6.79201" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sub-card draggable-handle draggable" tabIndex={0}>
                                                    <div className="d-items">
                                                        <div className="d-flex justify-content-between flex-wrap">
                                                            <div className="d-items-2">
                                                                <div>
                                                                    <svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width={1} height={1} fill="#888888" />
                                                                        <rect y={3} width={1} height={1} fill="#888888" />
                                                                        <rect y={6} width={1} height={1} fill="#888888" />
                                                                        <rect y={9} width={1} height={1} fill="#888888" />
                                                                        <rect y={12} width={1} height={1} fill="#888888" />
                                                                        <rect y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={4} y={15} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={3} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={6} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={9} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={12} width={1} height={1} fill="#888888" />
                                                                        <rect x={8} y={15} width={1} height={1} fill="#888888" />
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <div className="form-check custom-checkbox">
                                                                        <input type="checkbox" className="form-check-input" id="customCheckBox5" required />
                                                                        <label className="form-check-label" htmlFor="customCheckBox5">Compete this projects Monday</label>
                                                                    </div>
                                                                    <span>2023-12-26 07:15:00</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="icon-box icon-box-md bg-danger-light me-1">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598" stroke="#FF5E5E" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div className="icon-box icon-box-md bg-primary-light">
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.16492 13.6286H14" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M7.34723 4.00059L10.9821 6.79201" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 t-earn">
                        <div className="card">
                            <div className="card-header border-0 pb-0">
                                <h4 className="heading mb-0">Total Earning</h4>
                            </div>
                            <div className="card-body px-0 overflow-hidden">
                                <div className="total-earning" style={{ position: 'relative' }}>
                                    <h2>$6,743.00</h2>
                                    <ul className="nav nav-pills mb-3 earning-tab earning-chart" id="pills-tab1" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" data-series="day" id="pills-day-tab1" data-bs-toggle="pill" data-bs-target="#pills-day1" type="button" role="tab" aria-selected="true">Day</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-week-tab1" data-series="week" data-bs-toggle="pill" data-bs-target="#pills-week1" type="button" role="tab" aria-selected="false" tabIndex={-1}>Week</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-month-tab1" data-series="month" data-bs-toggle="pill" data-bs-target="#pills-month1" type="button" role="tab" aria-selected="false" tabIndex={-1}>Month</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-year-tab1" data-series="year" data-bs-toggle="pill" data-bs-target="#pills-year1" type="button" role="tab" aria-selected="false" tabIndex={-1}>Year</button>
                                        </li>
                                    </ul>

                                    <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: 299, height: 552 }} /></div><div className="contract-trigger" /></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 active-p">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects shorting">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Active Projects</h4>
                                    </div>
                                    <div id="projects-tbl_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="projects-tbl" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="projects-tbl" className="table ItemsCheckboxSec dataTable no-footer" role="grid" aria-describedby="projects-tbl_info">
                                        <thead>
                                            <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="projects-tbl" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="
													
														
														
													
												: activate to sort column descending" style={{ width: '25.375px' }}>
                                                <div className="form-check custom-checkbox ms-0">
                                                    <input type="checkbox" className="form-check-input checkAllInput" id="checkAll" required />
                                                    <label className="form-check-label" htmlFor="checkAll" />
                                                </div>
                                            </th><th className="sorting" tabIndex={0} aria-controls="projects-tbl" rowSpan={1} colSpan={1} aria-label="Project Name: activate to sort column ascending" style={{ width: '103.838px' }}>Project Name</th><th className="sorting" tabIndex={0} aria-controls="projects-tbl" rowSpan={1} colSpan={1} aria-label="Project Lead: activate to sort column ascending" style={{ width: '144.6px' }}>Project Lead</th><th className="sorting" tabIndex={0} aria-controls="projects-tbl" rowSpan={1} colSpan={1} aria-label="Progress: activate to sort column ascending" style={{ width: '72.3625px' }}>Progress</th><th className="sorting" tabIndex={0} aria-controls="projects-tbl" rowSpan={1} colSpan={1} aria-label="Assignee: activate to sort column ascending" style={{ width: '75.3px' }}>Assignee</th><th className="sorting" tabIndex={0} aria-controls="projects-tbl" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '78.1125px' }}>Status</th><th className="sorting" tabIndex={0} aria-controls="projects-tbl" rowSpan={1} colSpan={1} aria-label="Due Date: activate to sort column ascending" style={{ width: '78.5625px' }}>Due Date</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox2" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox2" />
                                                    </div>
                                                </td>
                                                <td>Batman</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="images/contacts/pic1.jpg" className="avatar rounded-circle" alt />
                                                        <p className="mb-0 ms-2">Liam Risher</p>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="tbl-progress-box">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" style={{ width: '53%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                        </div>
                                                        <span className="text-primary">53%</span>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="avatar-list avatar-list-stacked">
                                                        <img src="images/contacts/pic1.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic555.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic666.jpg" className="avatar rounded-circle" alt />
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <span className="badge badge-primary light border-0">Inprogress</span>
                                                </td>
                                                <td>
                                                    <span>08 Sep 2023</span>
                                                </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox3" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox3" />
                                                    </div>
                                                </td>
                                                <td>Mivy App</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="images/contacts/pic1.jpg" className="avatar rounded-circle" alt />
                                                        <p className="mb-0 ms-2">Honey Risher</p>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="tbl-progress-box">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" style={{ width: '53%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                        </div>
                                                        <span className="text-primary">52%</span>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="avatar-list avatar-list-stacked">
                                                        <img src="images/contacts/pic1.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic777.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic666.jpg" className="avatar rounded-circle" alt />
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <span className="badge badge-danger light border-0">Inprogress</span>
                                                </td>
                                                <td>
                                                    <span>06 Sep 2021</span>
                                                </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox22" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox22" />
                                                    </div>
                                                </td>
                                                <td>Crypto App</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="images/contacts/pic2.jpg" className="avatar rounded-circle" alt />
                                                        <p className="mb-0 ms-2">Ankites Risher</p>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="tbl-progress-box">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" style={{ width: '53%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                        </div>
                                                        <span className="text-primary">58%</span>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="avatar-list avatar-list-stacked">
                                                        <img src="images/contacts/pic1.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic777.jpg" className="avatar rounded-circle" alt />
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <span className="badge badge-danger light border-0">Pending</span>
                                                </td>
                                                <td>
                                                    <span>06 Sep 2021</span>
                                                </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox33" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox33" />
                                                    </div>
                                                </td>
                                                <td>Bender Project</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="images/contacts/pic2.jpg" className="avatar rounded-circle" alt />
                                                        <p className="mb-0 ms-2">Oliver Noah</p>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="tbl-progress-box">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" style={{ width: '30%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                        </div>
                                                        <span className="text-danger">30%</span>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="avatar-list avatar-list-stacked">
                                                        <img src="images/contacts/pic1.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic555.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic666.jpg" className="avatar rounded-circle" alt />
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <span className="badge badge-danger light border-0">Pending</span>
                                                </td>
                                                <td>
                                                    <span>06 Sep 2021</span>
                                                </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox044" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox044" />
                                                    </div>
                                                </td>
                                                <td>Canary</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="images/contacts/pic888.jpg" className="avatar rounded-circle" alt />
                                                        <p className="mb-0 ms-2">Elijah James</p>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="tbl-progress-box">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-success" style={{ width: '40%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                        </div>
                                                        <span className="text-success">40%</span>
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <div className="avatar-list avatar-list-stacked">
                                                        <img src="images/contacts/pic666.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic555.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic1.jpg" className="avatar rounded-circle" alt />
                                                        <img src="images/contacts/pic666.jpg" className="avatar rounded-circle" alt />
                                                    </div>
                                                </td>
                                                <td className="pe-0">
                                                    <span className="badge badge-success light border-0">Completed</span>
                                                </td>
                                                <td>
                                                    <span>06 Sep 2021</span>
                                                </td>
                                            </tr></tbody>
                                    </table><div className="dataTables_info" id="projects-tbl_info" role="status" aria-live="polite">Showing 1 to 5 of 15 entries</div><div className="dataTables_paginate paging_simple_numbers" id="projects-tbl_paginate"><a className="paginate_button previous disabled" aria-controls="projects-tbl" data-dt-idx={0} tabIndex={0} id="projects-tbl_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="projects-tbl" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="projects-tbl" data-dt-idx={2} tabIndex={0}>2</a><a className="paginate_button " aria-controls="projects-tbl" data-dt-idx={3} tabIndex={0}>3</a></span><a className="paginate_button next" aria-controls="projects-tbl" data-dt-idx={4} tabIndex={0} id="projects-tbl_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 flag">
                        <div className="card overflow-hidden">
                            <div className="card-header border-0">
                                <h4 className="heading mb-0">Active users</h4>
                            </div>
                            <div className="card-body pe-0">
                                <div className="row">
                                    <div className="col-xl-8 active-map-main">
                                        <div id="world-map" className="active-map" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'transparent' }}><svg width="395.1" height={266}><g transform="scale(0.41589473684210526) translate(0, 44.79245760566945)"><path d="M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_id" className="jqvmap-region" /><path d="M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_pg" className="jqvmap-region" /><path d="M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mx" className="jqvmap-region" /><path d="M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ee" className="jqvmap-region" /><path d="M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_dz" className="jqvmap-region" /><path d="M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ma" className="jqvmap-region" /><path d="M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mr" className="jqvmap-region" /><path d="M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sn" className="jqvmap-region" /><path d="M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gm" className="jqvmap-region" /><path d="M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gw" className="jqvmap-region" /><path d="M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gn" className="jqvmap-region" /><path d="M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sl" className="jqvmap-region" /><path d="M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_lr" className="jqvmap-region" /><path d="M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ci" className="jqvmap-region" /><path d="M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ml" className="jqvmap-region" /><path d="M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bf" className="jqvmap-region" /><path d="M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ne" className="jqvmap-region" /><path d="M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gh" className="jqvmap-region" /><path d="M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_tg" className="jqvmap-region" /><path d="M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bj" className="jqvmap-region" /><path d="M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ng" className="jqvmap-region" /><path d="M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_tn" className="jqvmap-region" /><path d="M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ly" className="jqvmap-region" /><path d="M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_eg" className="jqvmap-region" /><path d="M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_td" className="jqvmap-region" /><path d="M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sd" className="jqvmap-region" /><path d="M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cm" className="jqvmap-region" /><path d="M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_er" className="jqvmap-region" /><path d="M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_dj" className="jqvmap-region" /><path d="M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_et" className="jqvmap-region" /><path d="M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_so" className="jqvmap-region" /><path d="M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ye" className="jqvmap-region" /><path d="M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cf" className="jqvmap-region" /><path d="M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_st" className="jqvmap-region" /><path d="M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gq" className="jqvmap-region" /><path d="M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ga" className="jqvmap-region" /><path d="M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cg" className="jqvmap-region" /><path d="M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ao" className="jqvmap-region" /><path d="M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cd" className="jqvmap-region" /><path d="M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_rw" className="jqvmap-region" /><path d="M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bi" className="jqvmap-region" /><path d="M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ug" className="jqvmap-region" /><path d="M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ke" className="jqvmap-region" /><path d="M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_tz" className="jqvmap-region" /><path d="M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_zm" className="jqvmap-region" /><path d="M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mw" className="jqvmap-region" /><path d="M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mz" className="jqvmap-region" /><path d="M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_zw" className="jqvmap-region" /><path d="M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_na" className="jqvmap-region" /><path d="M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bw" className="jqvmap-region" /><path d="M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sz" className="jqvmap-region" /><path d="M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ls" className="jqvmap-region" /><path d="M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_za" className="jqvmap-region" /><path d="M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gl" className="jqvmap-region" /><path d="M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_au" className="jqvmap-region" /><path d="M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_nz" className="jqvmap-region" /><path d="M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_nc" className="jqvmap-region" /><path d="M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_my" className="jqvmap-region" /><path d="M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bn" className="jqvmap-region" /><path d="M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_tl" className="jqvmap-region" /><path d="M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sb" className="jqvmap-region" /><path d="M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_vu" className="jqvmap-region" /><path d="M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_fj" className="jqvmap-region" /><path d="M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ph" className="jqvmap-region" /><path d="M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cn" className="jqvmap-region" /><path d="M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_tw" className="jqvmap-region" /><path d="M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_jp" className="jqvmap-region" /><path d="M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ru" className="jqvmap-region" /><path d="M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_us" className="jqvmap-region" /><path d="M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mu" className="jqvmap-region" /><path d="M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_re" className="jqvmap-region" /><path d="M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mg" className="jqvmap-region" /><path d="M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_km" className="jqvmap-region" /><path d="M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sc" className="jqvmap-region" /><path d="M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mv" className="jqvmap-region" /><path d="M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_pt" className="jqvmap-region" /><path d="M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_es" className="jqvmap-region" /><path d="M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cv" className="jqvmap-region" /><path d="M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_pf" className="jqvmap-region" /><path d="M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_kn" className="jqvmap-region" /><path d="M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ag" className="jqvmap-region" /><path d="M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_dm" className="jqvmap-region" /><path d="M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_lc" className="jqvmap-region" /><path d="M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bb" className="jqvmap-region" /><path d="M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gd" className="jqvmap-region" /><path d="M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_tt" className="jqvmap-region" /><path d="M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_do" className="jqvmap-region" /><path d="M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ht" className="jqvmap-region" /><path d="M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_fk" className="jqvmap-region" /><path d="M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_is" className="jqvmap-region" /><path d="M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_no" className="jqvmap-region" /><path d="M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_lk" className="jqvmap-region" /><path d="M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cu" className="jqvmap-region" /><path d="M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bs" className="jqvmap-region" /><path d="M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_jm" className="jqvmap-region" /><path d="M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ec" className="jqvmap-region" /><path d="M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ca" className="jqvmap-region" /><path d="M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gt" className="jqvmap-region" /><path d="M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_hn" className="jqvmap-region" /><path d="M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sv" className="jqvmap-region" /><path d="M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ni" className="jqvmap-region" /><path d="M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cr" className="jqvmap-region" /><path d="M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_pa" className="jqvmap-region" /><path d="M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_co" className="jqvmap-region" /><path d="M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ve" className="jqvmap-region" /><path d="M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gy" className="jqvmap-region" /><path d="M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sr" className="jqvmap-region" /><path d="M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gf" className="jqvmap-region" /><path d="M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_pe" className="jqvmap-region" /><path d="M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bo" className="jqvmap-region" /><path d="M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_py" className="jqvmap-region" /><path d="M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_uy" className="jqvmap-region" /><path d="M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ar" className="jqvmap-region" /><path d="M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cl" className="jqvmap-region" /><path d="M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_br" className="jqvmap-region" /><path d="M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bz" className="jqvmap-region" /><path d="M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mn" className="jqvmap-region" /><path d="M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_kp" className="jqvmap-region" /><path d="M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_kr" className="jqvmap-region" /><path d="M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_kz" className="jqvmap-region" /><path d="M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_tm" className="jqvmap-region" /><path d="M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_uz" className="jqvmap-region" /><path d="M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_tj" className="jqvmap-region" /><path d="M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_kg" className="jqvmap-region" /><path d="M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_af" className="jqvmap-region" /><path d="M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_pk" className="jqvmap-region" /><path d="M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_in" className="jqvmap-region" /><path d="M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_np" className="jqvmap-region" /><path d="M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bt" className="jqvmap-region" /><path d="M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bd" className="jqvmap-region" /><path d="M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mm" className="jqvmap-region" /><path d="M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_th" className="jqvmap-region" /><path d="M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_kh" className="jqvmap-region" /><path d="M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_la" className="jqvmap-region" /><path d="M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_vn" className="jqvmap-region" /><path d="M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ge" className="jqvmap-region" /><path d="M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_am" className="jqvmap-region" /><path d="M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_az" className="jqvmap-region" /><path d="M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ir" className="jqvmap-region" /><path d="M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_tr" className="jqvmap-region" /><path d="M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_om" className="jqvmap-region" /><path d="M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ae" className="jqvmap-region" /><path d="M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_qa" className="jqvmap-region" /><path d="M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_kw" className="jqvmap-region" /><path d="M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sa" className="jqvmap-region" /><path d="M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sy" className="jqvmap-region" /><path d="M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_iq" className="jqvmap-region" /><path d="M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_jo" className="jqvmap-region" /><path d="M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_lb" className="jqvmap-region" /><path d="M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_il" className="jqvmap-region" /><path d="M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cy" className="jqvmap-region" /><path d="M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gb" className="jqvmap-region" /><path d="M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ie" className="jqvmap-region" /><path d="M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_se" className="jqvmap-region" /><path d="M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_fi" className="jqvmap-region" /><path d="M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_lv" className="jqvmap-region" /><path d="M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_lt" className="jqvmap-region" /><path d="M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_by" className="jqvmap-region" /><path d="M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_pl" className="jqvmap-region" /><path d="M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_it" className="jqvmap-region" /><path d="M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_fr" className="jqvmap-region" /><path d="M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_nl" className="jqvmap-region" /><path d="M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_be" className="jqvmap-region" /><path d="M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_de" className="jqvmap-region" /><path d="M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_dk" className="jqvmap-region" /><path d="M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ch" className="jqvmap-region" /><path d="M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_cz" className="jqvmap-region" /><path d="M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_sk" className="jqvmap-region" /><path d="M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_at" className="jqvmap-region" /><path d="M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_hu" className="jqvmap-region" /><path d="M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_si" className="jqvmap-region" /><path d="M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_hr" className="jqvmap-region" /><path d="M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ba" className="jqvmap-region" /><path d="M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mt" className="jqvmap-region" /><path d="M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ua" className="jqvmap-region" /><path d="M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_md" className="jqvmap-region" /><path d="M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_ro" className="jqvmap-region" /><path d="M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_rs" className="jqvmap-region" /><path d="M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_bg" className="jqvmap-region" /><path d="M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_al" className="jqvmap-region" /><path d="M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_mk" className="jqvmap-region" /><path d="M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z" stroke="rgb(239, 242, 244)" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="rgb(239, 242, 244)" original="rgb(239, 242, 244)" id="jqvmap1_gr" className="jqvmap-region" /></g></svg><div className="jqvmap-zoomin">+</div><div className="jqvmap-zoomout">−</div></div>
                                    </div>
                                    <div className="col-xl-4 active-country dz-scroll">
                                        <div className>
                                            <div className="country-list">
                                                <img src="images/country/india.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">India</p>
                                                        <p className="mb-0">50%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '60%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="country-list">
                                                <img src="images/country/canada.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">Canada</p>
                                                        <p className="mb-0">30%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '30%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="country-list">
                                                <img src="images/country/russia.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">Russia</p>
                                                        <p className="mb-0">20%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '20%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="country-list">
                                                <img src="images/country/uk.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">United Kingdom</p>
                                                        <p className="mb-0">40%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '40%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="country-list">
                                                <img src="images/country/aus.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">Australia</p>
                                                        <p className="mb-0">60%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '70%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="country-list">
                                                <img src="images/country/usa.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">United States</p>
                                                        <p className="mb-0">20%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '80%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="country-list">
                                                <img src="images/country/pak.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">Pakistan</p>
                                                        <p className="mb-0">20%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '20%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="country-list">
                                                <img src="images/country/germany.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">Germany</p>
                                                        <p className="mb-0">80%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '80%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="country-list">
                                                <img src="images/country/uae.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">UAE</p>
                                                        <p className="mb-0">30%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '30%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="country-list">
                                                <img src="images/country/china.png" alt />
                                                <div className="progress-box mt-0">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0 c-name">China</p>
                                                        <p className="mb-0">40%</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" style={{ width: '40%', height: 5, borderRadius: 4 }} role="progressbar" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 chat-map">
                        <div className="card">
                            <div className="card-header border-0 mb-0">
                                <h4 className="heading mb-0">Chat</h4>
                                <div className="d-flex align-items-center cs-settiong">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.8711 5.08237L13.4561 4.36231C13.1051 3.75303 12.3271 3.54284 11.717 3.89244V3.89244C11.4266 4.06352 11.08 4.11206 10.7538 4.02735C10.4275 3.94264 10.1484 3.73164 9.97788 3.44087C9.86819 3.25606 9.80925 3.04556 9.80702 2.83065V2.83065C9.81691 2.48611 9.68693 2.15223 9.44667 1.90507C9.20641 1.65792 8.87634 1.51853 8.53166 1.51868H7.69565C7.35796 1.51867 7.03419 1.65324 6.79599 1.89259C6.55778 2.13194 6.42477 2.45635 6.42639 2.79404V2.79404C6.41638 3.49124 5.84831 4.05117 5.15103 4.05109C4.93613 4.04886 4.72562 3.98992 4.54081 3.88023V3.88023C3.93069 3.53064 3.15273 3.74082 2.80168 4.3501L2.35622 5.08237C2.00559 5.69089 2.21292 6.46836 2.81999 6.8215V6.8215C3.21459 7.04932 3.45767 7.47035 3.45767 7.926C3.45767 8.38164 3.21459 8.80268 2.81999 9.0305V9.0305C2.21369 9.38125 2.00614 10.1568 2.35622 10.7635V10.7635L2.77727 11.4897C2.94175 11.7865 3.21772 12.0055 3.54411 12.0983C3.87051 12.191 4.22041 12.1499 4.5164 11.984V11.984C4.80737 11.8142 5.15411 11.7677 5.47955 11.8548C5.80498 11.9418 6.08214 12.1553 6.24943 12.4477C6.35912 12.6326 6.41806 12.8431 6.42029 13.058V13.058C6.42029 13.7623 6.99129 14.3333 7.69565 14.3333H8.53166C9.23364 14.3333 9.80366 13.766 9.80702 13.0641V13.0641C9.80538 12.7253 9.93923 12.4 10.1788 12.1604C10.4183 11.9209 10.7436 11.7871 11.0824 11.7887C11.2968 11.7944 11.5064 11.8531 11.6926 11.9596V11.9596C12.3011 12.3102 13.0786 12.1029 13.4317 11.4958V11.4958L13.8711 10.7635C14.0412 10.4716 14.0878 10.124 14.0008 9.79754C13.9137 9.47112 13.7002 9.19286 13.4073 9.0244V9.0244C13.1145 8.85593 12.9009 8.57768 12.8139 8.25125C12.7268 7.92483 12.7735 7.57717 12.9436 7.28527C13.0541 7.09218 13.2142 6.93209 13.4073 6.8215V6.8215C14.0107 6.46855 14.2176 5.69562 13.8711 5.08847V5.08847V5.08237Z" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="8.1167" cy="7.92602" r="1.75744" stroke="#0D99FF" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="dropdown bootstrap-select default-select status-select normal-select"><select className="default-select status-select normal-select">
                                        <option value="pending">Setting</option>
                                        <option value="testing">Group</option>
                                        <option value="progress">Chat</option>
                                    </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Setting"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Setting</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="chat-box-area style-1 dz-scroll" id="chartBox2">
                                    <div className="media">
                                        <div className="message-received w-auto">
                                            <div className="d-flex">
                                                <img src="images/contacts/pic2.jpg" className="avatar rounded-circle" alt />
                                                <div className="ms-1 text">
                                                    <p className="mb-1">Good morning</p>
                                                    <p className="mb-1">Can you arrange schedule for next meeting?</p>
                                                    <span>12:45 PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-center d-block mb-4">Today</span>
                                    <div className="media justify-content-end align-items-end ms-auto">
                                        <div className="message-sent w-auto">
                                            <p className="mb-1">Very Good morning</p>
                                            <p className="mb-1">Okay, I’ll arrange it soon. i noftify you when</p>
                                            <p className="mb-1">Very Good morning</p>
                                            <p>Okay, I’ll arrange it soon. i noftify you when it’s done<br />
                                                +91-235 2574 2566<br />
                                                kk Sharma<br />
                                                pan card eeer2063i</p>
                                            <span className="fs-12">9.30 AM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="message-send">
                                    <div className="type-massage style-1">
                                        <div className="input-group">
                                            <textarea rows={1} className="form-control" placeholder="Hello Hanuman..." defaultValue={""} />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary p-2">
                                        Send
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.555 5.44976L6.73936 9.30612L2.39962 6.59178C1.77783 6.20276 1.90718 5.25829 2.61048 5.05262L12.9142 2.03518C13.5582 1.84642 14.155 2.44855 13.9637 3.09466L10.9154 13.3912C10.7066 14.0955 9.76747 14.2213 9.38214 13.5968L6.73734 9.3068" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 bst-seller">
                        <div className="card">
                            <div className="card-header border-0">
                                <h4 className="heading mb-0">Best Selling Products</h4>
                                <div className="d-flex align-items-center cs-settiong">
                                    <span>SORT BY:</span>
                                    <div className="dropdown bootstrap-select default-select status-select normal-select"><select className="default-select status-select normal-select">
                                        <option value="Today">Today</option>
                                        <option value="Week">Week</option>
                                        <option value="Month">Month</option>
                                    </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Today"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Today</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects active-projects ItemsCheckboxSec selling-product shorting ">
                                    <div id="product-tbl_wrapper" className="dataTables_wrapper no-footer"><table id="product-tbl" className="table dataTable no-footer" role="grid" aria-describedby="product-tbl_info">
                                        <thead>
                                            <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="product-tbl" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="
													
														
														
													
												: activate to sort column descending" style={{ width: '25.375px' }}>
                                                <div className="form-check custom-checkbox ms-0">
                                                    <input type="checkbox" className="form-check-input checkAllInput" id="checkAll1" required />
                                                    <label className="form-check-label" htmlFor="checkAll1" />
                                                </div>
                                            </th><th className="sorting" tabIndex={0} aria-controls="product-tbl" rowSpan={1} colSpan={1} aria-label="Product Name: activate to sort column ascending" style={{ width: '162.488px' }}>Product Name</th><th className="sorting" tabIndex={0} aria-controls="product-tbl" rowSpan={1} colSpan={1} aria-label="Price: activate to sort column ascending" style={{ width: '47.6125px' }}>Price</th><th className="sorting" tabIndex={0} aria-controls="product-tbl" rowSpan={1} colSpan={1} aria-label="Orders: activate to sort column ascending" style={{ width: '59.5875px' }}>Orders</th><th className="sorting" tabIndex={0} aria-controls="product-tbl" rowSpan={1} colSpan={1} aria-label="Stock: activate to sort column ascending" style={{ width: '96.7625px' }}>Stock</th><th className="sorting" tabIndex={0} aria-controls="product-tbl" rowSpan={1} colSpan={1} aria-label="Amount: activate to sort column ascending" style={{ width: '68.2px' }}>Amount</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox220" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox220" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/d1.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">lether Dress</a></h6>
                                                            <span>24 Apr 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-primary">$85.20</span>
                                                </td>
                                                <td>
                                                    <span>750</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger light border-0">Out of Stock</span>
                                                </td>
                                                <td>
                                                    <span>$1200.75</span>
                                                </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox123" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox123" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/d2.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Men Jacket</a></h6>
                                                            <span>24 Apr 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-primary">$85.20</span>
                                                </td>
                                                <td>
                                                    <span>750</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger light border-0">Out of Stock</span>
                                                </td>
                                                <td>
                                                    <span>$1200.75</span>
                                                </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox24" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox24" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/d3.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Midi Dress</a></h6>
                                                            <span>24 Apr 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-primary">$85.20</span>
                                                </td>
                                                <td>
                                                    <span>750</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success light border-0">In Stock</span>
                                                </td>
                                                <td>
                                                    <span>$1200.75</span>
                                                </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox25" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox25" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/d4.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Boy Dress</a></h6>
                                                            <span>24 Apr 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-primary">$85.20</span>
                                                </td>
                                                <td>
                                                    <span>750</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success light border-0">In Stock</span>
                                                </td>
                                                <td>
                                                    <span>$1200.75</span>
                                                </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox26" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox26" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/d5.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Teen Dress</a></h6>
                                                            <span>24 Apr 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-primary">$85.20</span>
                                                </td>
                                                <td>
                                                    <span>750</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success light border-0">In Stock</span>
                                                </td>
                                                <td>
                                                    <span>$1200.75</span>
                                                </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox27" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox27" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/d6.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">White Top Dress</a></h6>
                                                            <span>24 Apr 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-primary">$85.20</span>
                                                </td>
                                                <td>
                                                    <span>750</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger light border-0">Out of Stock</span>
                                                </td>
                                                <td>
                                                    <span>$1200.75</span>
                                                </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox28" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox28" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/d7.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Mobile</a></h6>
                                                            <span>24 Apr 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-primary">$85.20</span>
                                                </td>
                                                <td>
                                                    <span>750</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success light border-0">In Stock</span>
                                                </td>
                                                <td>
                                                    <span>$1200.75</span>
                                                </td>
                                            </tr></tbody>
                                    </table><div className="dataTables_info" id="product-tbl_info" role="status" aria-live="polite">Showing 1 to 7 of 14 entries</div><div className="dataTables_paginate paging_simple_numbers" id="product-tbl_paginate"><a className="paginate_button previous disabled" aria-controls="product-tbl" data-dt-idx={0} tabIndex={0} id="product-tbl_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="product-tbl" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="product-tbl" data-dt-idx={2} tabIndex={0}>2</a></span><a className="paginate_button next" aria-controls="product-tbl" data-dt-idx={3} tabIndex={0} id="product-tbl_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 up-shd">
                        <div className="card">
                            <div className="card-header border-0 pb-1">
                                <h4 className="heading mb-0">Upcoming Schedules</h4>
                            </div>
                            <div className="card-body schedules-cal p-2">
                                <input type="text" className="form-control d-none" id="datetimepicker1" style={{}} /><div className="bootstrap-datetimepicker-widget bottom" style={{ inset: '39.382px auto auto 0px' }}><ul className="list-unstyled"><li className="collapse show"><div className="datepicker"><div className="datepicker-days" style={{}}><table className="table-condensed"><thead><tr><th className="prev" data-action="previous"><i className="fa fa-chevron-left" /></th><th className="picker-switch" data-action="pickerSwitch" colSpan={5} title="Select Month">January 2024</th><th className="next" data-action="next"><i className="fa fa-chevron-right" /></th></tr><tr><th className="dow">Su</th><th className="dow">Mo</th><th className="dow">Tu</th><th className="dow">We</th><th className="dow">Th</th><th className="dow">Fr</th><th className="dow">Sa</th></tr></thead><tbody><tr><td data-action="selectDay" data-day="12/31/2023" className="day old weekend">31</td><td data-action="selectDay" data-day="01/01/2024" className="day">1</td><td data-action="selectDay" data-day="01/02/2024" className="day">2</td><td data-action="selectDay" data-day="01/03/2024" className="day">3</td><td data-action="selectDay" data-day="01/04/2024" className="day">4</td><td data-action="selectDay" data-day="01/05/2024" className="day">5</td><td data-action="selectDay" data-day="01/06/2024" className="day weekend">6</td></tr><tr><td data-action="selectDay" data-day="01/07/2024" className="day weekend">7</td><td data-action="selectDay" data-day="01/08/2024" className="day">8</td><td data-action="selectDay" data-day="01/09/2024" className="day">9</td><td data-action="selectDay" data-day="01/10/2024" className="day">10</td><td data-action="selectDay" data-day="01/11/2024" className="day">11</td><td data-action="selectDay" data-day="01/12/2024" className="day">12</td><td data-action="selectDay" data-day="01/13/2024" className="day weekend">13</td></tr><tr><td data-action="selectDay" data-day="01/14/2024" className="day weekend">14</td><td data-action="selectDay" data-day="01/15/2024" className="day">15</td><td data-action="selectDay" data-day="01/16/2024" className="day">16</td><td data-action="selectDay" data-day="01/17/2024" className="day">17</td><td data-action="selectDay" data-day="01/18/2024" className="day">18</td><td data-action="selectDay" data-day="01/19/2024" className="day">19</td><td data-action="selectDay" data-day="01/20/2024" className="day weekend">20</td></tr><tr><td data-action="selectDay" data-day="01/21/2024" className="day weekend">21</td><td data-action="selectDay" data-day="01/22/2024" className="day">22</td><td data-action="selectDay" data-day="01/23/2024" className="day">23</td><td data-action="selectDay" data-day="01/24/2024" className="day">24</td><td data-action="selectDay" data-day="01/25/2024" className="day">25</td><td data-action="selectDay" data-day="01/26/2024" className="day">26</td><td data-action="selectDay" data-day="01/27/2024" className="day weekend">27</td></tr><tr><td data-action="selectDay" data-day="01/28/2024" className="day weekend">28</td><td data-action="selectDay" data-day="01/29/2024" className="day active today">29</td><td data-action="selectDay" data-day="01/30/2024" className="day">30</td><td data-action="selectDay" data-day="01/31/2024" className="day">31</td><td data-action="selectDay" data-day="02/01/2024" className="day new">1</td><td data-action="selectDay" data-day="02/02/2024" className="day new">2</td><td data-action="selectDay" data-day="02/03/2024" className="day new weekend">3</td></tr><tr><td data-action="selectDay" data-day="02/04/2024" className="day new weekend">4</td><td data-action="selectDay" data-day="02/05/2024" className="day new">5</td><td data-action="selectDay" data-day="02/06/2024" className="day new">6</td><td data-action="selectDay" data-day="02/07/2024" className="day new">7</td><td data-action="selectDay" data-day="02/08/2024" className="day new">8</td><td data-action="selectDay" data-day="02/09/2024" className="day new">9</td><td data-action="selectDay" data-day="02/10/2024" className="day new weekend">10</td></tr></tbody></table></div><div className="datepicker-months" style={{ display: 'none' }}><table className="table-condensed"><thead><tr><th className="prev" data-action="previous"><i className="fa fa-chevron-left" /></th><th className="picker-switch" data-action="pickerSwitch" colSpan={5} title="Select Year">2024</th><th className="next" data-action="next"><i className="fa fa-chevron-right" /></th></tr></thead><tbody><tr><td colSpan={7}><span data-action="selectMonth" className="month active">Jan</span><span data-action="selectMonth" className="month">Feb</span><span data-action="selectMonth" className="month">Mar</span><span data-action="selectMonth" className="month">Apr</span><span data-action="selectMonth" className="month">May</span><span data-action="selectMonth" className="month">Jun</span><span data-action="selectMonth" className="month">Jul</span><span data-action="selectMonth" className="month">Aug</span><span data-action="selectMonth" className="month">Sep</span><span data-action="selectMonth" className="month">Oct</span><span data-action="selectMonth" className="month">Nov</span><span data-action="selectMonth" className="month">Dec</span></td></tr></tbody></table></div><div className="datepicker-years" style={{ display: 'none' }}><table className="table-condensed"><thead><tr><th className="prev" data-action="previous"><i className="fa fa-chevron-left" /></th><th className="picker-switch" data-action="pickerSwitch" colSpan={5} title="Select Decade">2019-2030</th><th className="next" data-action="next"><i className="fa fa-chevron-right" /></th></tr></thead><tbody><tr><td colSpan={7}><span data-action="selectYear" className="year">2019</span><span data-action="selectYear" className="year">2020</span><span data-action="selectYear" className="year">2021</span><span data-action="selectYear" className="year">2022</span><span data-action="selectYear" className="year">2023</span><span data-action="selectYear" className="year active">2024</span><span data-action="selectYear" className="year">2025</span><span data-action="selectYear" className="year">2026</span><span data-action="selectYear" className="year">2027</span><span data-action="selectYear" className="year">2028</span><span data-action="selectYear" className="year">2029</span><span data-action="selectYear" className="year">2030</span></td></tr></tbody></table></div><div className="datepicker-decades" style={{ display: 'none' }}><table className="table-condensed"><thead><tr><th className="prev" data-action="previous"><i className="fa fa-chevron-left" /></th><th className="picker-switch" data-action="pickerSwitch" colSpan={5}>2000-2107</th><th className="next" data-action="next"><i className="fa fa-chevron-right" /></th></tr></thead><tbody><tr><td colSpan={7}><span data-action="selectDecade" className="decade" data-selection={2005}>2000 - 2011</span><span data-action="selectDecade" className="decade" data-selection={2017}>2012 - 2023</span><span data-action="selectDecade" className="decade active" data-selection={2029}>2024 - 2035</span><span data-action="selectDecade" className="decade" data-selection={2041}>2036 - 2047</span><span data-action="selectDecade" className="decade" data-selection={2053}>2048 - 2059</span><span data-action="selectDecade" className="decade" data-selection={2065}>2060 - 2071</span><span data-action="selectDecade" className="decade" data-selection={2077}>2072 - 2083</span><span data-action="selectDecade" className="decade" data-selection={2089}>2084 - 2095</span><span data-action="selectDecade" className="decade" data-selection={2101}>2096 - 2107</span><span /><span /><span /></td></tr></tbody></table></div></div></li><li className="picker-switch accordion-toggle"><table className="table-condensed"><tbody><tr><td><a data-action="togglePicker" title="Select Time"><i className="fa fa-clock-o" /></a></td></tr></tbody></table></li><li className="collapse"><div className="timepicker"><div className="timepicker-picker"><table className="table-condensed"><tbody><tr><td><a href="#" tabIndex={-1} title="Increment Hour" className="btn" data-action="incrementHours"><i className="fa fa-chevron-up" /></a></td><td className="separator" /><td><a href="#" tabIndex={-1} title="Increment Minute" className="btn" data-action="incrementMinutes"><i className="fa fa-chevron-up" /></a></td><td className="separator" /></tr><tr><td><span className="timepicker-hour" data-time-component="hours" title="Pick Hour" data-action="showHours">01</span></td><td className="separator">:</td><td><span className="timepicker-minute" data-time-component="minutes" title="Pick Minute" data-action="showMinutes">46</span></td><td><button className="btn btn-primary" data-action="togglePeriod" tabIndex={-1} title="Toggle Period">PM</button></td></tr><tr><td><a href="#" tabIndex={-1} title="Decrement Hour" className="btn" data-action="decrementHours"><i className="fa fa-chevron-down" /></a></td><td className="separator" /><td><a href="#" tabIndex={-1} title="Decrement Minute" className="btn" data-action="decrementMinutes"><i className="fa fa-chevron-down" /></a></td><td className="separator" /></tr></tbody></table></div><div className="timepicker-hours" style={{ display: 'none' }}><table className="table-condensed"><tbody><tr><td data-action="selectHour" className="hour">12</td><td data-action="selectHour" className="hour">01</td><td data-action="selectHour" className="hour">02</td><td data-action="selectHour" className="hour">03</td></tr><tr><td data-action="selectHour" className="hour">04</td><td data-action="selectHour" className="hour">05</td><td data-action="selectHour" className="hour">06</td><td data-action="selectHour" className="hour">07</td></tr><tr><td data-action="selectHour" className="hour">08</td><td data-action="selectHour" className="hour">09</td><td data-action="selectHour" className="hour">10</td><td data-action="selectHour" className="hour">11</td></tr></tbody></table></div><div className="timepicker-minutes" style={{ display: 'none' }}><table className="table-condensed"><tbody><tr><td data-action="selectMinute" className="minute">00</td><td data-action="selectMinute" className="minute">05</td><td data-action="selectMinute" className="minute">10</td><td data-action="selectMinute" className="minute">15</td></tr><tr><td data-action="selectMinute" className="minute">20</td><td data-action="selectMinute" className="minute">25</td><td data-action="selectMinute" className="minute">30</td><td data-action="selectMinute" className="minute">35</td></tr><tr><td data-action="selectMinute" className="minute">40</td><td data-action="selectMinute" className="minute">45</td><td data-action="selectMinute" className="minute">50</td><td data-action="selectMinute" className="minute">55</td></tr></tbody></table></div></div></li></ul></div>
                                <div className="events">
                                    <h6>events</h6>
                                    <div className="dz-scroll event-scroll">
                                        <div className="event-media">
                                            <div className="d-flex align-items-center">
                                                <div className="event-box">
                                                    <h5 className="mb-0">20</h5>
                                                    <span>Mon</span>
                                                </div>
                                                <div className="event-data ms-2">
                                                    <h5 className="mb-0"><a href="javascript:void(0)">Development planning</a></h5>
                                                    <span>w3it Technologies</span>
                                                </div>
                                            </div>
                                            <span className="text-secondary">12:05 PM</span>
                                        </div>
                                        <div className="event-media">
                                            <div className="d-flex align-items-center">
                                                <div className="event-box">
                                                    <h5 className="mb-0">20</h5>
                                                    <span>Mon</span>
                                                </div>
                                                <div className="event-data ms-2">
                                                    <h5 className="mb-0"><a href="javascript:void(0)">Development planning</a></h5>
                                                    <span>w3it Technologies</span>
                                                </div>
                                            </div>
                                            <span className="text-secondary">12:05 PM</span>
                                        </div>
                                        <div className="event-media">
                                            <div className="d-flex align-items-center">
                                                <div className="event-box">
                                                    <h5 className="mb-0">20</h5>
                                                    <span>Mon</span>
                                                </div>
                                                <div className="event-data ms-2">
                                                    <h5 className="mb-0"><a href="javascript:void(0)">Development planning</a></h5>
                                                    <span>w3it Technologies</span>
                                                </div>
                                            </div>
                                            <span className="text-secondary">12:05 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 up-shd">
                        <div className="card">
                            <div className="card-header pb-0 border-0">
                                <h4 className="heading mb-0">Projects Status</h4>
                                <div className="dropdown bootstrap-select default-select status-select normal-select"><select className="default-select status-select normal-select">
                                    <option value="Today">Today</option>
                                    <option value="Week">Week</option>
                                    <option value="Month">Month</option>
                                </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Today"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Today</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-3" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                            </div>
                            <div className="card-body" style={{ position: 'relative' }}>

                                <div className="project-date">
                                    <div className="project-media">
                                        <p className="mb-0">
                                            <svg className="me-2" width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.5" width={12} height={12} rx={3} fill="var(--primary)" />
                                            </svg>
                                            Completed Projects
                                        </p>
                                        <span>125 Projects</span>
                                    </div>
                                    <div className="project-media">
                                        <p className="mb-0">
                                            <svg className="me-2" width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.5" width={12} height={12} rx={3} fill="#3AC977" />
                                            </svg>
                                            Progress Projects
                                        </p>
                                        <span>125 Projects</span>
                                    </div>
                                    <div className="project-media">
                                        <p className="mb-0">
                                            <svg className="me-2" width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.5" width={12} height={12} rx={3} fill="#FF5E5E" />
                                            </svg>
                                            Cancelled
                                        </p>
                                        <span>125 Projects</span>
                                    </div>
                                    <div className="project-media">
                                        <p className="mb-0">
                                            <svg className="me-2" width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.5" width={12} height={12} rx={3} fill="#FF9F00" />
                                            </svg>
                                            Yet to Start
                                        </p>
                                        <span>125 Projects</span>
                                    </div>
                                </div>
                                <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: 299, height: 403 }} /></div><div className="contract-trigger" /></div></div>
                        </div>
                    </div>
                    <div className="col-xl-9 bst-seller">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting ">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Employees</h4>
                                        <div>
                                            <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">+ Add Employee</a>
                                            <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1">+ Invite Employee
                                            </button>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tbl_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tbl" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tbl" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tbl_info">
                                        <thead>
                                            <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tbl" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="
													
														
														
													
												: activate to sort column descending" style={{ width: '25.65px' }}>
                                                <div className="form-check custom-checkbox ms-0">
                                                    <input type="checkbox" className="form-check-input checkAllInput" id="checkAll2" required />
                                                    <label className="form-check-label" htmlFor="checkAll2" />
                                                </div>
                                            </th><th className="sorting" tabIndex={0} aria-controls="empoloyees-tbl" rowSpan={1} colSpan={1} aria-label="Employee ID: activate to sort column ascending" style={{ width: '97.025px' }}>Employee ID</th><th className="sorting" tabIndex={0} aria-controls="empoloyees-tbl" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '167.663px' }}>Employee Name</th><th className="sorting" tabIndex={0} aria-controls="empoloyees-tbl" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '109.588px' }}>Email Address</th><th className="sorting" tabIndex={0} aria-controls="empoloyees-tbl" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '126.338px' }}>Contact Number</th><th className="sorting" tabIndex={0} aria-controls="empoloyees-tbl" rowSpan={1} colSpan={1} aria-label="Gender: activate to sort column ascending" style={{ width: '64.625px' }}>Gender</th><th className="sorting" tabIndex={0} aria-controls="empoloyees-tbl" rowSpan={1} colSpan={1} aria-label="Location: activate to sort column ascending" style={{ width: '72.025px' }}>Location</th><th className="sorting" tabIndex={0} aria-controls="empoloyees-tbl" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '74.3625px' }}>Status</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox0100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox0100" />
                                                    </div>
                                                </td>
                                                <td><span>1001</span></td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/pic1.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Ricky Antony</a></h6>
                                                            <span>Web Designer</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">ra@gmail.com</a></td>
                                                <td>
                                                    <span>+12 123 456 7890</span>
                                                </td>
                                                <td>
                                                    <span>Male</span>
                                                </td>
                                                <td>
                                                    <span>AZ</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success light border-0">Active</span>
                                                </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox1100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox1100" />
                                                    </div>
                                                </td>
                                                <td><span>1018</span></td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/pic2.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Ricky Antony</a></h6>
                                                            <span>Web Designer</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">abc@gmail.com</a></td>
                                                <td>
                                                    <span>+91 123 456 7890</span>
                                                </td>
                                                <td>
                                                    <span>Male</span>
                                                </td>
                                                <td>
                                                    <span>Delhi</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success light border-0">Active</span>
                                                </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox151" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox151" />
                                                    </div>
                                                </td>
                                                <td><span>1018</span></td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/pic3.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Ricky M</a></h6>
                                                            <span>Software Designer</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">rm@gmail.com</a></td>
                                                <td>
                                                    <span>+55 123 456 7890</span>
                                                </td>
                                                <td>
                                                    <span>Male</span>
                                                </td>
                                                <td>
                                                    <span>PA</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success light border-0">Active</span>
                                                </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox2100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox2100" />
                                                    </div>
                                                </td>
                                                <td><span>1018</span></td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/pic1.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Ricky Antony</a></h6>
                                                            <span>Software Designer</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">abc@gmail.com</a></td>
                                                <td>
                                                    <span>+91 123 456 7890</span>
                                                </td>
                                                <td>
                                                    <span>Male</span>
                                                </td>
                                                <td>
                                                    <span>Delhi</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success light border-0">Active</span>
                                                </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox3100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox3100" />
                                                    </div>
                                                </td>
                                                <td><span>1018</span></td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/contacts/pic2.jpg" className="avatar avatar-md" alt />
                                                        <div>
                                                            <h6><a href="javascript:void(0)">Honey Risher</a></h6>
                                                            <span>Software Designer</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">hr@gmail.com</a></td>
                                                <td>
                                                    <span>+22 123 456 7890</span>
                                                </td>
                                                <td>
                                                    <span>Female</span>
                                                </td>
                                                <td>
                                                    <span>WA</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge-success light border-0">Active</span>
                                                </td>
                                            </tr></tbody>
                                    </table><div className="dataTables_info" id="empoloyees-tbl_info" role="status" aria-live="polite">Showing 1 to 5 of 15 entries</div><div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tbl_paginate"><a className="paginate_button previous disabled" aria-controls="empoloyees-tbl" data-dt-idx={0} tabIndex={0} id="empoloyees-tbl_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="empoloyees-tbl" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="empoloyees-tbl" data-dt-idx={2} tabIndex={0}>2</a><a className="paginate_button " aria-controls="empoloyees-tbl" data-dt-idx={3} tabIndex={0}>3</a></span><a className="paginate_button next" aria-controls="empoloyees-tbl" data-dt-idx={4} tabIndex={0} id="empoloyees-tbl_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <DearMearchantPopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
    )
}
export default DasBoardRight