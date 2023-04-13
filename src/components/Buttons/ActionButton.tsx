import React from "react";
import DownArrow from '../../illustrations/icons/DownArrow';
import Menu from '../menus/Menu';

interface ActionButtonProps {
    selectedRows: number;
    customContent: JSX.Element;
}

const ActionButton = ({ selectedRows, customContent }: ActionButtonProps) => {
    return (
        selectedRows > 0 && (
            <div className="px-4 py-2 flex items-center">
                <Menu
                    triggerComponent={
                        <button className=".field-content text-primary-main border rounded-lg py-2 px-6 flex items-center font-openSans">
                            Actions <DownArrow className="ml-[9px]" />
                        </button>
                    }
                    isCustomMenu
                    customContent={customContent}
                />
            </div>
        )
    );
};

export default ActionButton;
