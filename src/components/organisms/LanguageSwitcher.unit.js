import LanguageSwitcher from "./LanguageSwitcher";

describe("@components/organisms/LanguageSwitcher", () => {
	it(...isValidComponent(LanguageSwitcher));

	it("Changes language", () => {
		const wrapper = shallowMount(LanguageSwitcher, {
			propsData: {
				value: "de",
			},
			...createComponentMocks({
				stubs: {
					"base-input": true,
				},
				user: true,
				i18n: true
			}),
		});
		expect(wrapper.vm.$store.state.auth.locale).toBe("de");
		wrapper.find("base-input-stub[label=en]").trigger("click");
		expect(wrapper.vm.$store.state.auth.locale).toBe("en");
	});
});
