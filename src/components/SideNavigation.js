const SideNavigation = {
  props: {
    modelValue: { type: Boolean, default: false },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const close = () => emit("update:modelValue", false);
    return () => (slots.default ? slots.default({ close }) : []);
  },
};

export default SideNavigation;
