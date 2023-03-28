import { Fade, Td, Text } from '@chakra-ui/react';
import { formatNumberToUsd, formatPercent } from '@snx-v2/formatters';

interface PnLProps {
  pnl: number;
  pnlPercentage: number;
}

export const PnL = ({ pnl, pnlPercentage }: PnLProps) => {
  return (
    <Td border="none">
      <Fade in>
        <Text
          fontFamily="heading"
          fontWeight={500}
          fontSize="14px"
          lineHeight="20px"
          color={pnl >= 0 ? 'green.500' : 'red.500'}
        >
          {`${pnl >= 0 ? '+' : ''}${formatNumberToUsd(pnl)}`}
        </Text>
        <Text color="gray.500" fontSize="12px" lineHeight="16px" fontFamily="heading">
          {pnl >= 0 ? '+' : '-'}
          {formatPercent(pnlPercentage)}
        </Text>
      </Fade>
    </Td>
  );
};