<?php

namespace App\Http\Middleware;

use Closure;

class RequestPerformanceMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $start = microtime(true);
        $ret = $next($request);
        $length = (microtime(true) - $start) * 1000;
        \DB::table('request_performance')
            ->insert([
                'time' => $length,
                'created_at' => now()
            ]);
        return $ret;
    }
}
