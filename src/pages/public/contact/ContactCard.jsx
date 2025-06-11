const ContactCard = ({
    icon,
    title = "",
    background = "",
    details,
}) => {
    return (
        <div
            className="w-full h-full bg-cover text-white bg-center flex flex-col justify-start py-8 px-6 text-center items-center gap-y-3"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(${background})`,
            }}
        >
            <div
                className="bg-white text-gray-900 rounded-full p-5"
            >{icon}</div>
            {title && <h3 className="text-white text-2xl font-semibold">{title}</h3>}
            {details}
        </div>
    );
};

export default ContactCard;
