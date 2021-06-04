function periodIsLate(last, today, cycleLength)
{
  return (today - last) / 86400000 > cycleLength;
}