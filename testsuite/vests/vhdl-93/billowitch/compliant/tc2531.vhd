
-- Copyright (C) 2001 Bill Billowitch.

-- Some of the work to develop this test suite was done with Air Force
-- support.  The Air Force and Bill Billowitch assume no
-- responsibilities for this software.

-- This file is part of VESTs (Vhdl tESTs).

-- VESTs is free software; you can redistribute it and/or modify it
-- under the terms of the GNU General Public License as published by the
-- Free Software Foundation; either version 2 of the License, or (at
-- your option) any later version. 

-- VESTs is distributed in the hope that it will be useful, but WITHOUT
-- ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
-- FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
-- for more details. 

-- You should have received a copy of the GNU General Public License
-- along with VESTs; if not, write to the Free Software Foundation,
-- Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA 

-- ---------------------------------------------------------------------
--
-- $Id: tc2531.vhd,v 1.2 2001-10-26 16:29:48 paw Exp $
-- $Revision: 1.2 $
--
-- ---------------------------------------------------------------------

ENTITY c07s03b05x00p06n02i02531ent IS
END c07s03b05x00p06n02i02531ent;

ARCHITECTURE c07s03b05x00p06n02i02531arch OF c07s03b05x00p06n02i02531ent IS

BEGIN
  TESTING: PROCESS
    variable k1 : integer    := 5;
    variable k2 : real    := 1.1;
  BEGIN
    k2 := real (k1);
    assert NOT( k2=5.0 )
      report "***PASSED TEST: c07s03b05x00p06n02i02531"
      severity NOTE;
    assert ( k2=5.0 )
      report "***FAILED TEST: c07s03b05x00p06n02i02531 - The type conversion from integer to real failed."
      severity ERROR;
    wait;
  END PROCESS TESTING;

END c07s03b05x00p06n02i02531arch;
