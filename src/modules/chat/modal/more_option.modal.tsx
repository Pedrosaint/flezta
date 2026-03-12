import { Delete } from "@/assets/svg/svg_icon";
import OptionItem from "@/shared/ui/components/option.ui";
import { SlideInModal } from "@/shared/ui/components/modal.ui";
import { Flag, Ban } from "lucide-react";
import { BsQuestionSquare } from "react-icons/bs";
import WarningModal from "@/modules/profile/modal/delete.modal";
import { useMoreOptionsModalHook } from "../hooks/more_options.hook";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const MoreOptionsModal = ({ isOpen, onClose }: IProps) => {
    const {
        activeWarning,
        handleBlockClick,
        handleDeleteClick,
        closeWarning,
        handleConfirmBlock,
        handleConfirmDelete
    } = useMoreOptionsModalHook();

    return (
        <>
            <SlideInModal
                isOpen={isOpen}
                onClose={onClose}
                title="More Option"
                maxWidth="max-w-[700px]"
            >
                <div className="p-6">
                    {/* Options */}
                    <div className="space-y-1 mb-8">
                        <OptionItem icon={<BsQuestionSquare size={20} />} label="Help" />
                        <OptionItem icon={<Flag size={20} />} label="Report" />
                        <OptionItem
                            icon={<Delete stroke="black" />}
                            label="Delete conversation"
                            onClick={handleDeleteClick}
                        />
                        <OptionItem
                            icon={<Ban size={20} />}
                            label="Block"
                            onClick={handleBlockClick}
                        />
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-lg border-b border-gray-200 pb-8 font-semibold pl-5 text-gray-900 mb-4 uppercase">
                            How we support buyers
                        </h3>
                        <div className="pl-10">
                            <p className="text-lg text-gray-800 mb-4 font-medium">
                                You'll be refunded if the order:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Isn't sent",
                                    "Gets lost or is damaged in transit",
                                    "Is significantly not as described"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-lg text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </SlideInModal>

            {activeWarning === 'block' && (
                <WarningModal
                    onClose={closeWarning}
                    onConfirm={handleConfirmBlock}
                    onCloseSuccess={() => {
                        closeWarning();
                        onClose();
                    }}
                    title="Hold up!"
                    description="if you block this seller, they can't converse with you again,"
                    confirmText="Yes, Block"
                    successDescription="you have successfully blocked this seller"
                />
            )}

            {activeWarning === 'delete' && (
                <WarningModal
                    onClose={closeWarning}
                    onConfirm={handleConfirmDelete}
                    onCloseSuccess={() => {
                        closeWarning();
                        onClose();
                    }}
                    title="Delete conversation?"
                    description="You'll lose all your chat with this member. You can't undo this action. Should we delete?"
                    confirmText="Yes, Delete"
                    successDescription="You have successfully deleted a conversation with Offixy Steeve"
                />
            )}
        </>
    );
};

export default MoreOptionsModal;
