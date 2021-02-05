/*
 * jQuery Blueberry Slider v0.4 BETA
 * http://marktyrrell.com/labs/blueberry/
 *
 * Copyright (C) 2011, Mark Tyrrell <me@marktyrrell.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

.blueberry { margin: 0 auto; }
.blueberry .slides {
	display: block;
	position: relative;
	overflow: hidden;
}
.blueberry .slides li {
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
}
.blueberry .slides li img {
	display: block;
	width: 100%;
	max-width: none;
}
.blueberry .slides li.active { display: block; position: relative; }
.blueberry .crop li img { width: auto; }

.blueberry .pager {
	height: 40px;
	text-align: center;
}
.blueberry .pager li { display: inline-block; }
.blueberry .pager li a,
.blueberry .pager li a span {
	display: block;
	height: 4px;
	width: 4px;
}
.blueberry .pager li a {
	padding: 18px 8px;
-webkit-border-radius: 6px;
   -moz-border-radius: 6px;
	border-radius: 6px;
}
.blueberry .pager li a span {
	overflow: hidden;
	background: #c0c0c0;
	text-indent: -9999px;
-webkit-border-radius: 2px;
   -moz-border-radius: 2px;
	border-radius: 2px;
}
.blueberry .pager li.active a span { background: #404040; }
