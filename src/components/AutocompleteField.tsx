import type { FieldConfig } from 'formik';
import { useField } from 'formik';
import type { FC } from 'react';
import React, { useEffect } from 'react';
import type { GetOptionValue } from 'react-select';
import Select from 'react-select';

interface AutocompleteFieldProps extends FieldConfig {
  label: string;
  options: [];
  defaultSelected: string[] | any;
  isMulti: boolean;
}
interface OptionsObj {
  readonly value: string;
  readonly label: string;
}

const AutocompleteField: FC<AutocompleteFieldProps> = ({
  options,
  defaultSelected,
  ...props
}) => {
  const [defaultArray, setDefaultArray] = React.useState<readonly OptionsObj[]>(
    []
  );
  const [field, meta, helpers] = useField<GetOptionValue<any>>(
    props.name ?? ''
  );

  const handleSelectChange = (selectedOption: GetOptionValue<any> | any) => {
    if (props.isMulti) {
      helpers.setValue(selectedOption?.map((el: any) => el?.value));
    } else {
      helpers.setValue(selectedOption?.value);
    }
  };

  const optionsArray: OptionsObj[] = options?.map((el: any) => ({
    value: el?.value,
    label: el?.label,
  }));
  const getValue = () => {
    if (options) {
      return optionsArray.find(
        (option) => option?.label === String(field?.value)
      );
    }
    return '';
  };
  useEffect(() => {
    const selected = optionsArray?.filter(
      (el) => defaultSelected?.indexOf(el?.label) !== -1
    );
    // console.log("AUTO SELECTED", selected)
    setDefaultArray(selected);
  }, [defaultSelected]);
  return (
    <>
      {defaultArray?.length > 0 ? (
        <div>
          <Select
            {...field}
            {...props}
            value={getValue()}
            options={optionsArray}
            onChange={handleSelectChange}
            onBlur={() => helpers.setTouched(true)}
            defaultValue={
              defaultArray?.length > 0 ? defaultArray : defaultArray[0]
            }
            isMulti={props.isMulti}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: 'gray',
                primary: 'white',
                neutral0: 'black',
              },
            })}
            styles={{
              valueContainer: (base) => ({
                ...base,
                color: 'red',
              }),
              singleValue: (base, state) => ({
                ...base,
                color: state.hasValue ? 'white' : 'white',
              }),
              placeholder: (base) => ({
                ...base,
                display: 'none',
              }),
            }}
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder={'Select options below'}
          />
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default AutocompleteField;
