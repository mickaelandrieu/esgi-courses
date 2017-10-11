<?php

/**
 * This class is used to realize some basic calculations.
 * For training purposes only, use bc_math functions instead.
 * @author Mickaël Andrieu <mickael.andrieu@solvolabs.com>
 */
class Calculator
{
    /**
     * @var float The result to display
     */
    public static $result = 0;

    /**
     * @param float $number A number.
     */
    public static function add($number)
    {
        self::$result = self::$result + $number;

        return self;
    }

    /**
     * @param float $number A number.
     */
    public static function minus($number)
    {
        self::$result = self::$result - $number;
    }

    /**
     * @param float $number A number.
     */
    public static function multiply($number)
    {
        self::$result = self::$result * $number;
    }

    /**
     * @param float $number A number.
     */
    public static function divideBy($number)
    {
        self::$result = self::$result / $number;
    }
}
