// App.tsx
import { CssBaseline, Grid, styled, ThemeProvider, Typography } from '@mui/material';
import React, { FC, ReactNode, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { RenderData } from '../types';
import Editor from './components/Editor';
import theme from './theme';

const StyledGridContainer = styled(Grid)(() => ({
  height: '100vh',
}));

const StyledSidebar = styled(Grid)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  height: '100vh',
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
  render?: (business: RenderData) => ReactNode;
  renderData: RenderData;
  onPublish: (data: RenderData) => Promise<void>;
}

const PreviewApp: FC<IPreviewAppProps> = props => {
  const { renderData: initialRenderData, onPublish } = props;
  const [renderData, setRenderBusiness] = useLocalStorage<RenderData>(
    'renderData',
    initialRenderData,
  );

  useEffect(() => {
    if (!renderData) {
      setRenderBusiness(initialRenderData);
    }
  }, [initialRenderData]);

  const onSubmit = (data: RenderData) => {
    setRenderBusiness({
      ...renderData,
      ...data,
      section: {
        shopName: {
          ...renderData.section.shopName,
          detail: data.shopName,
        },
        contacts: {
          ...renderData.section.contacts,
          detail: data.contacts,
        },
        description: {
          ...renderData.section.description,
          detail: data.description,
        },
        location: {
          ...renderData.section.location,
          detail: data.location,
        },
        reviewers: {
          ...renderData.section.reviewers,
          detail: data.reviewers,
        },
      },
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledGridContainer container spacing={0.5}>
        <StyledSidebar item xs={3}>
          <Typography variant="h5">SekWeb.site</Typography>
          <Editor
            data={renderData}
            onChange={data => onSubmit(data)}
            onPublish={data => onPublish(data)}
          />
        </StyledSidebar>
        <StyledMainContent item xs={9}>
          {props.render ? props.render(renderData) : props.children}
        </StyledMainContent>
      </StyledGridContainer>
    </ThemeProvider>
  );
};

export default PreviewApp;
