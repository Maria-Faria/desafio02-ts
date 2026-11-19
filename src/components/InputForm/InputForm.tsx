import { Field, Image, Input } from "@chakra-ui/react";

interface IInputForm {
	label: string
	placeholder: string
	type?: string 
	icon?: string
}

export const InputForm = ({ label, placeholder, type, icon }: IInputForm) => {
  return (
    <Field.Root>
      <Field.Label fontSize="14px" fontWeight="semibold">
        {label}
      </Field.Label>
      <Input placeholder={placeholder} type={type}>
				<Image src=""/>
			</Input>
    </Field.Root>
  );
};
