import React from 'react';
import PeerCoachPop from '../../Assets/Images/PeerCoach_pop.svg';
import GuidedSkillsPop from '../../Assets/Images/GuidedSkills_pop.svg';
import AnchorChartPop from '../../Assets/Images/AnchorChart_pop.png';
import SkillsCoachPop from '../../Assets/Images/SkillsCoach_pop.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Styles/Modals.css';

const PeerModal = ({
    peerModal,
    setPeerModal,
    guidedModal,
    setGuidedModal,
    skillsModal,
    setSkillsModal,
    anchorModal,
    setAnchorModal,
}) => {
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modal = {
        hidden: {
            y: '-100vh',
            opacity: 0,
        },
        visible: {
            y: '0px',
            opacity: 1,
            transition: { delay: 0.5 },
        },
    };

    const setImage = () => {
        if (peerModal) {
            return PeerCoachPop;
        } else if (guidedModal) {
            return GuidedSkillsPop;
        } else if (skillsModal) {
            return SkillsCoachPop;
        } else if (anchorModal) {
            return AnchorChartPop;
        } else return null;
    };

    const handleClose = () => {
        setAnchorModal(false);
        setPeerModal(false);
        setSkillsModal(false);
        setGuidedModal(false);
    };

    const type = () => {
        if (peerModal) {
            return 'peer';
        } else if (guidedModal) {
            return 'guided';
        } else if (skillsModal) {
            return 'skills';
        } else if (anchorModal) {
            return 'anchor';
        } else return null;
    };

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                {peerModal || guidedModal || skillsModal || anchorModal ? (
                    <motion.div
                        className={`outerModal flex centerFlex ${type}`}
                        variants={backdrop}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'>
                        <div className='spacer'></div>
                        <motion.div
                            className={`flex flexColumn innerModal ${type}`}
                            variants={modal}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'>
                            <div className='modal-main'>
                                <div className='button-row'>
                                    <button
                                        className='close-button'
                                        onClick={handleClose}>
                                        <FontAwesomeIcon
                                            className='x-icon free'
                                            icon={faXmark}
                                        />
                                    </button>
                                </div>
                                <div className='main-container'>
                                    <img
                                        className='modal-pic'
                                        alt='peer coach'
                                        src={setImage()}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
};

export default PeerModal;
