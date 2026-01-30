import { Delete } from "@/assets/svg/svg_icon";
import OptionItem from "@/shared/ui/components/option.ui";
import { AnimatePresence, motion } from "framer-motion";
import { X, Flag, Ban } from "lucide-react";
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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-[700px] bg-white shadow-2xl z-[60] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white flex items-center justify-between p-6 border-b border-gray-100 z-10">
                            <h2 className="text-xl font-semibold text-gray-900">More Option</h2>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

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
                            <div className="">
                                <h3 className="text-lg border-b border-gray-200 pb-8 font-semibold pl-5 text-gray-900 mb-4 uppercase">
                                    How we support buyers
                                </h3>

                                <div className="pl-10">
                                    <p className="text-lg text-gray-800 mb-4 font-medium">You’ll be refunded if the order:</p>

                                    <ul className="space-y-3">
                                        {[
                                            "Isn’t sent",
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
                    </motion.div>
                </>
            )}
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
                    description="You’ll lose all your chat with this member. You can’t undo this action. Should we delete?"
                    confirmText="Yes, Delete"
                    successDescription="You have successfully deleted a conversation with Offixy Steeve"
                />
            )}
        </AnimatePresence>
    );
};

export default MoreOptionsModal;
