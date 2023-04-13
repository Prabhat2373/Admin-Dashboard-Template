import React from "react";
interface ButtonProps {
    defaultbutton?: boolean;
    color?: string;

    icon?: "none" | "startIcon" | "endIcon";
    startIcon?: any;
    endIcon?: any;

    label?: string;
    variant: "default" | "secondary" | "tertiary";
    size?: "large" | "normal" | "medium" | "small" | "extrasmall";
    style?: object;
    type?: "submit" | "reset" | "button";
    form?: string;
    disabled?: boolean;

    onClick?: () => void;
}

export const Button = ({
    defaultbutton = false,
    startIcon,
    endIcon,
    icon = "none",
    color = "primary",
    size = "medium",
    label,
    variant = "default",
    style,
    ...props
}: ButtonProps) => {
    let mode = "";
    let sizeOfBtn = "";

    function sizes(btnsize: string) {
        if (size === "medium") {
            sizeOfBtn = "py-4 px-8 btn-md";
        }
        if (size === "small") {
            sizeOfBtn = "py-3 px-6 btn-sm";
        }
        if (size === "extrasmall") {
            sizeOfBtn = "py-2 px-6 btn-xs ";
        }
    }

    if (variant === "default") {
        sizes(size);
        mode = `p-2 text-bgColor-400  ${sizeOfBtn} border-[1px] border-${color}-main bg-${color}-main rounded-lg hover:bg-${color}-100 focus:bg-${color}-300 focus:outline-${color}-main active:bg-${color}-400 disabled:text-${color}-600 diasbled:bg-${color}-600 flex gap-2 justify-center items-center font-openSans`;
    }
    if (variant === "secondary") {
        sizes(size);
        mode = `text-${color}-main   ${sizeOfBtn} border-[1px] border-${color}-main rounded-lg hover:bg-${color}-800 transition-all active:bg-background-400 active:text-${color}-500 active:border-${color}-500 focus:text-${color}-500 focus:outline-${color}-500 flex gap-2 justify-center items-center font-openSans`;
    }
    if (variant === "tertiary") {
        sizes(size);
        mode = `text-${color}-main bg-background-400 ${sizeOfBtn} normal  hover:text-${color}-100 focus:text-${color}-300 focus:outline-background-400 active:bg-background-400 active:border-2 active:border-${color}-400 rounded disabled:text-${color}-600 bg-background-text flex gap-2 justify-center items-center font-openSans`;
    }

    return (
        <>
            <button
                className={`${mode} leading-3 font-openSans`}
                style={{ ...style }}
                type="button"
                {...props}
            >
                {!!startIcon && startIcon}
                {label}
                {!!endIcon && endIcon}
            </button>
        </>
    );
};
