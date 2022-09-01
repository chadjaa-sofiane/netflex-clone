import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {}
} as ComponentMeta<typeof Button>;


const template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const RedButton = template.bind({});

RedButton.args = {
    children: "Button",
    color: "red"
};