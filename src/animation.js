export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },

    shown: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
    
    exit: {
        opacity: 0,
        y: 300,

        transition: {
            duration: 0.5
        },
    }

}

export const titleAnim = {
    hidden: {
        y: 200
    },

    shown: {
        y: 0,
        transition: {duration: 0.75, ease: "easeOut"},
    }
}

export const fade = {
    hidden: {
        opacity: 0,
    },

    shown: {
        opacity: 1,
        transition: {duration: 0.75, ease: "easeOut"},
    }
}

export const photoAnim = {
    hidden: {scale: 1.5, opacity: 0},

    shown: {
        scale: 1,
        opacity: 1,
        transition: {duration: 0.75, ease: "easeOut"},
    }
}

export const lineAnim = {
    hidden: {
        width: '0%',
    },

    shown: {
        width: '100%',
        transition: {
            duration: 1,
        },
    }
}

export const slider = {
    hidden: {
        x: '-130%',
        skew: "45deg",
    },

    shown: {
        x: "100%",
        skew: "0deg",
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    }
}

export const sliderContainer = {
    hidden: {opacity: 1},
    shown: {opacity: 1, transition: {staggerChildren: 0.1, ease: "easeOut"}}
}

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        transition: {
            duration: 0.5
        }
    },

    shown: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        },
    }
}