// App.tsx
import React, { FC, ReactNode, useCallback, useState } from 'react';
import { Grid, Typography, Box, styled, ThemeProvider, CssBaseline } from '@mui/material';
import Editor from './components/Editor';
import { BusinessData, Section, Widget } from '../../types';
import theme from './theme';
import WidgetRegistry from './widgets/WidgetRegistry';

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  height: '100vh',
  overflow: 'hidden',
}));

const StyledSidebar = styled(Grid)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  boxShadow: theme.shadows[3],
}));

const StyledMainContent = styled(Grid)(({ theme }) => ({
  height: '100vh',
  overflowY: 'auto',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

interface IPreviewAppProps {
  children?: ReactNode;
  render?: (business: BusinessData) => ReactNode;
  business: BusinessData;
}

const App: FC<IPreviewAppProps> = (props) => {
  const [business, setBusiness] = useState<BusinessData>(props.business);

  const onSubmit = useCallback((data: BusinessData) => {
    console.log("data", data);
    setBusiness(data);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledGridContainer container spacing={0.5}>
        <StyledSidebar item xs={3}>
          <Typography variant='h5'>SekWeb.site</Typography>
          <Editor data={business} onChange={(data) => setBusiness(data)} />
        </StyledSidebar>
        <StyledMainContent item xs={9}>
          {props.render ? props.render(business) : props.children}
          {business.sections.map((section: Section) => (
            <Box key={section.id} mt={2} p={2} border="1px solid #ccc">
              <Typography variant="h6">{section.title}</Typography>
              {section.widgets.map((widget: Widget) => {
                const WidgetComponent = WidgetRegistry[widget.type];
                return WidgetComponent ? <WidgetComponent key={widget.id} {...widget.props} /> : null;
              })}
            </Box>
          ))}
        </StyledMainContent>
      </StyledGridContainer>
    </ThemeProvider>
  );
};

export default App;
