<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'username',
        'name',
        'surname1',
        'surname2',
        'email',
        'password',
        'birth_date',
        'type',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function client(){
        return $this->hasOne(Client::class);
    }

    public function files(){
        return $this->hasMany(File::class);
    }

    //Función que relacione a un usuario con su imagen de perfil (1:1)

    public function owner(){
        return $this->hasOne(Owner::class);
    }

    public function administrator(){
        return $this->hasOne(Administrator::class);
    }
}
