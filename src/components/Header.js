import './Header.css';

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerGroup">
                <div className="headerItem" id="title">
                    trendy bags
                </div>
                <div className="headerItem">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
                        <line x1="3" y1="22" x2="21" y2="22"></line>
                    </svg>
                </div>
            </div>
            <div className="headerGroup">
                <div className="headerItem">
                    Collection
                </div>
                <div className="headerItem">
                    Products
                </div>
                <div className="headerItem">
                    Philosophy
                </div>
                <div className="headerItem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                    <div id="panierCount">12</div>
                </div>
            </div>

        </div>

    )
};

export default Header;