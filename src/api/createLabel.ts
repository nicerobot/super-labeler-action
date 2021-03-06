import { ApiProps } from '.';
import { Label } from '../parseContext';
import { formatColour } from '../utils';

export const createLabel = async ({
  client,
  repo,
  label,
}: ApiProps & { label: Label }) => {
  const color = formatColour(label.color);
  await client.issues.createLabel({
    ...repo,
    ...label,
    color,
  });
};
