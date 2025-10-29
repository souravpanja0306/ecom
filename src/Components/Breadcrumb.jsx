import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex p-2">
            <ol className="flex items-center">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index !== 0 && (
                            <MdArrowForwardIos className="text-gray-700 hover:text-blue-600 text-sm font-medium"/>
                        )}
                        {item.href ? (
                            <Link to={item.href} className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-500 text-sm font-medium">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
