
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
-- $Id: tc1419.vhd,v 1.2 2001-10-26 16:30:09 paw Exp $
-- $Revision: 1.2 $
--
-- ---------------------------------------------------------------------

ENTITY c08s06b00x00p02n01i01419ent IS
END c08s06b00x00p02n01i01419ent;

ARCHITECTURE c08s06b00x00p02n01i01419arch OF c08s06b00x00p02n01i01419ent IS

BEGIN
  TESTING: PROCESS
    signal some    : integer := 12;
    signal p    : integer := 3;
    signal q    : boolean := true;
  BEGIN
    some (p,q);
    assert FALSE
      report "***FAILED TEST: c08s06b00x00p02n01i01419 - A name that is not a procedure is used in a procedure call statement"
      severity ERROR;
    wait;
  END PROCESS TESTING;

END c08s06b00x00p02n01i01419arch;
