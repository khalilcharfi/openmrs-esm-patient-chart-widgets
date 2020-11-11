import React from "react";

import { Trans, useTranslation } from "react-i18next";
import { match } from "react-router-dom";
import {
  DataTable,
  Link,
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Tile
} from "carbon-components-react";

import { DataCaptureComponentProps } from "../../widgets/shared-utils";
import EmptyDataIllustration from "./empty-data-illustration.component";
import ErrorIllustration from "./error-illustration.component";

export default function EmptyState(props: EmptyStateProps) {
  const { t } = useTranslation();

  const EmptyDataView = () => (
    <>
      <EmptyDataIllustration />
      <p className="empty-state__heading">
        <Trans
          i18nKey="emptyStateText"
          values={{ displayText: props.displayText.toLowerCase() }}
        >
          This patient has no {props.displayText.toLowerCase()} recorded in the
          system.
        </Trans>
      </p>
      <br />
      {props.showComponent && (
        <Link
          onClick={() => props.showComponent(props.addComponent, props.name)}
        >
          {t("add", "Add")} {props.displayText.toLowerCase()}
        </Link>
      )}
    </>
  );

  const ErrorManagementView = () => (
    <>
      <ErrorIllustration />
      <p className="empty-state__heading">
        <Trans
          i18nKey="errorStateText"
          values={{ widgetName: props.name.toLowerCase() }}
        >
          Sorry, there was a server error.
        </Trans>
      </p>
    </>
  );

  return (
    <DataTable
      rows={[]}
      headers={[]}
      render={() => (
        <TableContainer title={props.name}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  {props.hasError ? <ErrorManagementView /> : <EmptyDataView />}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
}

type EmptyStateProps = {
  hasError?: boolean;
  name: string;
  displayText: string;
  styles?: React.CSSProperties;
  addComponent?: React.FC<RouteBasedComponentProps | DataCaptureComponentProps>;
  showComponent?: Function;
};

type RouteBasedComponentProps = {
  basePath?: string;
  match?: match;
};
