<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Post;
use App\Models\Rating;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = factory(User::class, 15)->create()->each(function ($user) {
            $user->posts()->saveMany(factory(Post::class, 20)->make());
        });
        $posts = Post::all();
        $users->each(function ($user) use ($posts) {
            $posts->each(function ($post) use ($user) {
                $rating = factory(Rating::class)->make();
                $rating->post_id = $post->id;
                $user->ratings()->save($rating);
            });
        });
    }
}
