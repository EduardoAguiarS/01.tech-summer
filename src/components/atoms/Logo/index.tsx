import logo_header from "../../../../public/assets/logo/logo-header.svg";
import logo_footer from "../../../../public/assets/logo/logo-footer.svg";

export const LogoHeader = () => {
    return (
        <div className="logo__header">
            <img src={logo_header} alt="Original.io" />
        </div>
    );
};

export const LogoFooter = () => {
    return (
        <div className="logo__footer">
            <img src={logo_footer} alt="Original.io" />
        </div>
    );
};
