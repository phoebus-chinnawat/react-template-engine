// Editor.tsx
import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { BusinessData, Widget } from '../../types';
import WidgetRegistry from '../widgets/WidgetRegistry';

interface EditorProps {
  data: BusinessData;
  onChange: (data: BusinessData) => void;
}

const Editor: React.FC<EditorProps> = ({ data, onChange }) => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: data,
  });

  const { fields: sectionFields, append: appendSection } = useFieldArray({
    control,
    name: 'sections',
  });

  const onSubmit = (formData: BusinessData) => {
    onChange(formData);
  };

  const addWidget = (sectionIndex: number, widgetType: string) => {
    const newSections = [...data.sections];
    newSections[sectionIndex].widgets.push({ id: Date.now(), type: widgetType });
    onChange({ ...data, sections: newSections });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Controller
          name="shopName"
          control={control}
          render={({ field }) => <TextField fullWidth label="Shop Name" {...field} />}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => <TextField fullWidth label="Description" {...field} />}
        />
        <Controller
          name="contacts.email"
          control={control}
          render={({ field }) => <TextField fullWidth label="Email" {...field} />}
        />
        <Controller
          name="contacts.phone"
          control={control}
          render={({ field }) => <TextField fullWidth label="Phone" {...field} />}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => appendSection({ id: Date.now(), title: '', widgets: [] })}
        >
          Add Section
        </Button>

        {sectionFields.map((section, sectionIndex) => (
          <Box key={section.id} mt={2} p={2} border="1px solid #ccc">
            <TextField
              fullWidth
              label="Section Title"
              defaultValue={section.title}
              {...register(`sections.${sectionIndex}.title` as const)}
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => addWidget(sectionIndex, 'countdown')}
            >
              Add Countdown
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => addWidget(sectionIndex, 'contactForm')}
            >
              Add Contact Form
            </Button>
            {section.widgets.map((widget: Widget) => {
              const WidgetComponent = WidgetRegistry[widget.type];
              return WidgetComponent ? <WidgetComponent key={widget.id} {...widget.props} /> : null;
            })}
          </Box>
        ))}
      </Box>
    </form>
  );
};

export default Editor;
