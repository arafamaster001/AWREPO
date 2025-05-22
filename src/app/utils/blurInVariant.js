
export const blurInVariant = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay,
      },
    }),
  };
  