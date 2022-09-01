import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

export default {
    title: "input",
    component: Input,
    argTypes: {},
} as ComponentMeta<typeof Input>

const template: ComponentStory<typeof Input> = (args) => <Input {...args} />


export const TextInput = template.bind({});

TextInput.args = {
    label: "sofiane is kinf of the world",
    name: "message",
    type: "email"
}